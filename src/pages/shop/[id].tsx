import Loading from "@/components/loading/Loading";
import ProductDetails from "@/components/products/details/ProductDetails";
import { getProductById } from "@/services/productService";
import { Product } from "@/types";
import { GetServerSideProps } from "next";
import { Suspense } from "react";

type Props = {
    productDetails: Product | null;
}

const ProductDetailsPage = ({ productDetails }: Props) => {
    return (
        <Suspense fallback={<Loading />}>
            <ProductDetails productDetails={productDetails} />
        </Suspense>
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