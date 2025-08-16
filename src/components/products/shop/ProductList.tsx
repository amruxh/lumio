import { useEffect, useState } from "react";
import ProductCard from "../cards/ProductCard";
import {
  getAllProducts,
  searchProduct,
  getProductsByCategory,
} from "@/services/productService";
import ProductsSkeleton from "../../skeleton/ProductsSkeleton";
import { Product } from "@/types";

type PageProps = {
  params: {
    query?: string | undefined;
    category?: string | undefined;
  };
};

const ProductList = ({ params }: PageProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    setLoading(true);

    try {
      let data;

      if (params.query && params.query !== "") {
        data = await searchProduct(params?.query);
      } else if (params.category && params.category !== "") {
        data = await getProductsByCategory(params?.category);
      } else {
        data = await getAllProducts();
      }

      setProducts(data?.products || []);
    } catch (err) {
      console.error("Error fetching products:", err);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [params]);

  return (
    <div className="product-container flex flex-col md:flex-row flex-nowrap md:flex-wrap justify-evenly md:gap-5">
      {loading ? (
        <ProductsSkeleton rows={3} />
      ) : products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p className="text-white">No products found.</p>
      )}
    </div>
  );
};

export default ProductList;
