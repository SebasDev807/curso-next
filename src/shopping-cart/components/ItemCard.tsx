'use client';

import Image from "next/image";
import { IoAddCircleOutline, IoRemove } from "react-icons/io5";
import { useRouter } from "next/navigation";
import type { Product } from '../../products/data/products';
import { addProductToCart, removeItemFromCart } from "../actions/actions";

interface Props {
  product: Product;
  quantity: number;
}

export const ItemCard = ({ product, quantity }: Props) => {
  const router = useRouter();

  function onAddToCart() {
    addProductToCart(product.id);
    router.refresh();
  }

  function onRemoveItem() {
    removeItemFromCart(product.id);
    router.refresh();
  }

  return (
    <div className="flex items-center bg-gradient-to-r from-slate-50 to-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-gray-300 group">

      {/* Product Image */}
      <div className="relative h-32 w-32 flex-shrink-0 overflow-hidden rounded-xl">
        <Image
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          src={product.image}
          alt={product.name}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Info */}
      <div className="ml-6 flex-grow">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {product.name}
        </h3>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <p className="text-gray-600">
            Precio unitario:
          </p>
          <p className="text-gray-800 font-medium text-right">
            ${product.price.toFixed(2)}
          </p>

          <p className="text-gray-600">
            Cantidad:
          </p>
          <p className="text-gray-800 font-medium text-right">
            {quantity}
          </p>

          <p className="text-gray-600">
            Total:
          </p>
          <p className="text-gray-800 font-semibold text-right">
            ${(product.price * quantity).toFixed(2)}
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="ml-8 flex flex-col items-center justify-center space-y-3">
        <button
          onClick={onAddToCart}
          className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-300 hover:bg-emerald-50 group/button">
          <IoAddCircleOutline size={28} className="text-emerald-600 group-hover/button:text-emerald-700 transition-colors duration-300" />
        </button>

        <span className="text-lg font-semibold text-gray-800 bg-gray-100 px-3 py-1 rounded-full min-w-[2.5rem] text-center">
          {quantity}
        </span>

        <button
          onClick={onRemoveItem}
          className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-300 hover:bg-rose-50 group/button">
          <IoRemove size={28} className="text-rose-600 group-hover/button:text-rose-700 transition-colors duration-300" />
        </button>
      </div>
    </div>
  );
};