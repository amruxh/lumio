import Loading from "@/components/loading/Loading";
import ProductDetails from "@/components/products/details/ProductDetails";
import { getProductById } from "@/services/productService";
import { Product } from "@/types";
import { GetServerSideProps } from "next";
import { Suspense } from "react";
import Head from "next/head";

type Props = {
  productDetails: Product | null;
}

const ProductDetailsPage = ({ productDetails }: Props) => {
  return (
    <>
      {/* ✅ Dynamic Metadata */}
      <Head>
        <title>{productDetails?.title} | MyStore</title>
        <meta name="description" content={productDetails?.description} />
        <meta property="og:title" content={productDetails?.title} />
        <meta property="og:description" content={productDetails?.description} />
        {productDetails?.thumbnail && (
          <meta property="og:image" content={productDetails?.thumbnail} />
        )}
      </Head>

      {/* Page content */}
      <Suspense fallback={<Loading />}>
        <ProductDetails productDetails={productDetails} />
      </Suspense>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = Number(context.params?.id);
  const productDetails = await getProductById(id);

  return {
    props: {
      productDetails: productDetails || null,
    },
  };
};

export default ProductDetailsPage;