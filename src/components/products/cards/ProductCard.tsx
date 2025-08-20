"use client";
import RatingStars from "./RatingStars";
import PriceSection from "./PriceSection";
import Image from "next/image";
import { Product } from "@/types";
import Link from "next/link";

const ProductCard = ({ product }:{ product: Product } ) => {

  return (
    <Link href={`/shop/${product.id}`} title={product.title} className={`md:max-w-[270px] w-full max-h-[370px] bg-[var(--background-alt)] py-1 md:py-0 flex md:flex-col flex-row justify-between overflow-hidden border border-[var(--border)] gap-3 rounded-lg md:hover:scale-105 transition-transform duration-300 cursor-pointer`}>
      <div className="min-w-[120px] w-1/3 md:w-full relative md:h-40 h-32 bg-white">
        <Image
          src={product.thumbnail}
          alt={`${product.title} image`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="rounded-lg object-contain"
        />
      </div>

      <div className="flex-grow flex flex-col justify-between px-2 md:justify-end">
        <h3 className="line-clamp-1 w-full">{product.title}</h3>
        <PriceSection discountPercentage={product.discountPercentage} price={product.price} mainText='text-lg' secText='text-sm' className="flex gap-2 items-center"/>
        <div className="product-meta box-border flex flex-col justify-between items-start">
          <span className="product-category text-xs text-[var(--background)] mb-2 py-0.5 px-2 bg-gray-700 rounded-sm">{product.category.toUpperCase()}</span>
          <div className="product-rating text-sm flex mb-2">
            <RatingStars
              className="inline-flex gap-1"
              rating={Math.round(product.rating)}
            />
            <span className="tracking-wider text-[var(--foreground-muted)]">
              ({product.rating.toFixed(1)} ratings)
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
