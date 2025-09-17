import { Product, products } from '@/products/data/products';
import { ItemCard } from '@/shopping-cart';
import { cookies } from 'next/headers';
import { WidgetItem } from '../../../components/WidgetItem';



export const metadata = {
    title: 'Cart',
    description: 'Cart',
};


interface ProductInCart {
    product: Product;
    quantity: number
}


const getProductsInCart = (cart: { [id: string]: number }) => {
    const productsInCart: ProductInCart[] = [];

    for (const id of Object.keys(cart)) {
        const product = products.find(product => product.id === id);
        if (product) {
            productsInCart.push({ product, quantity: cart[id] })
        }
    }

    return productsInCart;

}

export default async function CartPage() {

    const cookiesStore = await cookies();
    const cart = JSON.parse(cookiesStore.get('cart')?.value ?? '{}');
    const productsInCart = getProductsInCart(cart);

    const totalToPay = productsInCart.reduce((acc, current) => {
        return (current.product.price * current.quantity) + acc
    }, 0)

    return (
        <div>
            <h1 className="text-3xl text-center">
                Productos en el carrito
            </h1>


            <hr className="m-5" />

            {
                productsInCart.length === 0 &&
                <p className="text-center mt-5 text-xl text-slate-500">
                    No hay productos en el carrito
                </p>
            }
            <div className="flex flex-col sm:flex-row gap-2 w-full">

                <div className="flex flex-col gap-2 w-full sm:w-8/12">

                    {
                        productsInCart.map(({ product, quantity }) => (
                            <ItemCard
                                key={product.id}
                                quantity={quantity}
                                product={product}

                            />
                        ))
                    }
                </div>
                <div className="flex flex-col w-4/12">

                    {productsInCart.length > 0 &&

                        <WidgetItem title='Total a pagar'>
                            <div className='mt-2 flex justify-center gap-2'>
                                <h3 className='text-3xl font-bold text-gray-700'>
                                    $ {(totalToPay * 1.15).toFixed(2)}
                                </h3>
                            </div>
                            <span className='font-bold text-center text-gray-500'>
                                Impuestos 15%: ${(totalToPay * 0.15).toFixed(2)}
                            </span>

                        </WidgetItem>
                    }
                </div>
            </div>
        </div>
    );
}