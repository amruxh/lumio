import { Star } from "lucide-react";
import ImageContainer from "./ImagesContainer";
import CommentCard from "../cards/Comment";
import PriceSection from "../cards/PriceSection";
import { Comment, Product } from "@/types";
import { useCart } from "@/contexts/CartContext";
import { useRouter } from "next/navigation";

const ProductDetails = ({ productDetails }: { productDetails: Product | null }) => {
  const router = useRouter();
  const { isExists, addToCart } = useCart();
  if (!productDetails) {
    return (
      <section className="p-5 text-center text-red-400">
        <h2>Product not found.</h2>
      </section>
    );
  }

  const discountPercentage = productDetails?.discountPercentage
    ? Math.round(Number(productDetails.discountPercentage))
    : 0;

  return (
    <section className="flex flex-col gap-20 w-full p-5">
      <div className="flex flex-col md:flex-row w-full">
        {/* Left section */}
        <ImageContainer productDetails={productDetails} />
        {/* Right section */}
        <div className="flex-1 mt-2 flex flex-col">
          <h2 className="font-bold order-1 text-2xl">{productDetails?.title}</h2>
          <p className="mt-1 text-lg order-2 text-[var(--foreground-muted)]">{productDetails?.description}</p>
          <div className="rating flex order-3 gap-3 my-3">
            <span className="flex bg-green-600 text-[var(--background)] pl-1 py-0.5 rounded-xs text-sm items-center gap-1 w-[50px]">
              {productDetails?.rating}<Star className="size-3 fill-white stroke-0" />
            </span>
            <span className="text-[var(--foreground-muted)] font-semibold">{productDetails?.reviews?.length} reviews.</span>
          </div>
          <PriceSection discountPercentage={discountPercentage} price={Number(productDetails?.price)} mainText='text-3xl' secText='text-lg' className="my-1 flex gap-3 order-4 items-center" />
          <div className="mt-3 order-5">
            <span className="bg-[var(--background-alt)] p-2 box-border border border-[var(--border)]">Tags:
              <span className="text-[var(--foreground-muted)]"> #{productDetails?.tags?.join(' #')}</span>
            </span>
          </div>
          <div className="mt-6 order-6">
            <span>Status:{' '}
              <span className={`${productDetails?.availabilityStatus?.includes('Low') ? 'bg-red-800' : 'bg-green-700'} rounded-sm p-1 text-[var(--background)] box-border border border-[var(--border)]`}>{productDetails?.availabilityStatus}</span>
            </span>
          </div>
          {/* Buttons */}
          <div className="w-full md:max-w-[400px] mb-3 order-0 md:order-7 flex gap-3 mt-8 h-[40px] font-semibold justify-around md:justify-start">
            <button className="bg-yellow-500 rounded flex-1 max-w-[200px] hover:bg-yellow-700 cursor-pointer"
              onClick={() => isExists(Number(productDetails?.id)) ? router.push('/cart') : addToCart(Number(productDetails?.id))}>
              {isExists(Number(productDetails?.id)) ? 'Go to Cart' : 'Add to cart'}
            </button>
            <button className="border border-[var(--border)] max-w-[200px] flex-1 rounded hover:bg-[var(--foreground)] hover:text-[var(--background)] cursor-pointer"
            onClick={() => router.push('/checkout/'+productDetails?.id)}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-semibold text-2xl mb-3 ml-1">Comments from the buyers:</h1>
        <div className="flex md:flex-row flex-col gap-5 md:flex-wrap">
          {productDetails?.reviews?.map((review: Comment) => (
            <CommentCard key={Math.random()} {...review} />
          ))}

        </div>
      </div>
    </section>
  );
};

export default ProductDetails;

