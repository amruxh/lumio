import DetailsBar from "@/components/products/shop/DetailsBar";
import ProductList from "@/components/products/shop/ProductList";
import { useSearchParams } from "next/navigation";

const Shop = () => {
    const searchParams = useSearchParams();
    const params = {
        query: searchParams.get('query') ?? '',
        category: searchParams.get('category') ?? ''
    }
    return (
        <section>
            <DetailsBar details={params} />
            <ProductList params={params} />
        </section>
    );
};

export default Shop;
