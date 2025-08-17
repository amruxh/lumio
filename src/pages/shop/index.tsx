import DetailsBar from "@/components/products/shop/DetailsBar";
import ProductList from "@/components/products/shop/ProductList";
import { useSearchParams } from "next/navigation";
import Head from "next/head";

const Shop = () => {
    const searchParams = useSearchParams();
    const params = {
        query: searchParams.get('query') ?? '',
        category: searchParams.get('category') ?? ''
    }
    return (
        <>
            <Head>
                <title>Products | LUMIO</title>
                <meta
                    name="description"
                    content="Discover a wide range of premium products at LUMIO. From electronics to lifestyle essentials, shop high-quality items at the best prices with a seamless shopping experience."
                />
                <meta property="og:title" content="Products | LUMIO" />
                <meta
                    property="og:description"
                    content="Explore LUMIO's collection of top-quality products. Find electronics, fashion, accessories, and more with unbeatable deals and fast delivery."
                />
            </Head>



            <section>
                <DetailsBar details={params} />
                <ProductList params={params} />
            </section>
        </>
    );
};

export default Shop;
