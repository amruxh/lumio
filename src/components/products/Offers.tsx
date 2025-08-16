import ProductCard from "./cards/ProductCard";
import { Product, Products } from "@/types";

export default function Offers({ productsData }: { productsData: Products | null }) {
  const offersData = productsData?.products.filter(
    (product: Product) => product.discountPercentage > 19.05
  );

  return (
    <section>
      <div className="product-container flex flex-col md:flex-row flex-nowrap md:flex-wrap justify-evenly md:gap-5">
        {offersData?.map((product: Product, index: number) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </section>
  );
}
