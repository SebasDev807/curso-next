import { products } from '../data/products';
import { ProductCard } from './ProductCard';
export const ProductGrid = () => {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {products.map(product => (
                <ProductCard
                    key={product.id}
                    {...product}
                />
            ))}

        </section>
    )
}
