'use client'


import { addProductToCart,removeProductFromCart } from "@/shopping-cart";
import Image from "next/image"
import { useRouter } from "next/navigation";
import { IoAddCircleOutline, IoTrashOutline } from "react-icons/io5"

interface Props {
  id: string;
  name: string;
  price: number
  rating?: number;
  image: string;

}



export const ProductCard = ({ id, name, price, rating = 1, image }: Props) => {

  const stars = new Array(rating).fill('star');

  const router = useRouter();

  const handleAddToCart = () => {
    addProductToCart(id);
    router.refresh();
  }

  const handleRemoveFromoCart = () => {
    removeProductFromCart(id);
    router.refresh();
  }

  return (
    <article className="group max-w-sm bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">

      {/* Imagen */}
      <a href="#" className="block relative cursor-pointer">
        <div className="relative w-full h-64 bg-gray-50 dark:bg-gray-800">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
          {/* sutil overlay al hacer hover para dar sensación premium */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </a>

      {/* Contenido */}
      <div className="p-6">
        <a href="#" className="block">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 leading-snug cursor-pointer hover:text-indigo-600 transition-colors">
            {name}
          </h3>
        </a>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-1">

              {stars.map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{rating.toFixed(1)}</span>
          </div>

          <div className="text-2xl font-extrabold text-gray-900 dark:text-gray-100">${price}</div>
        </div>

        <div className="mt-6 flex items-center gap-3">
          {/* Botón principal — CTA con gradiente para look premium */}
          <button
            onClick={handleAddToCart}
            aria-label="Agregar al carrito"
            className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-br from-indigo-600 to-indigo-500 text-white font-medium shadow-md transform transition hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
          >
            <IoAddCircleOutline size={20} />
            <span className="hidden sm:inline">Agregar</span>
          </button>

          {/* Botón secundario — estilo más discreto */}
          <button
            aria-label="Eliminar"
            className="cursor-pointer inline-flex items-center justify-center p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 shadow-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300"
            onClick={handleRemoveFromoCart}
         >
            <IoTrashOutline size={18} />
          </button>

        </div>
      </div>
    </article>
  )
}
