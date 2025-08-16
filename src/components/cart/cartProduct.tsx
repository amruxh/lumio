"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useCart } from "@/contexts/CartContext";
import RatingStars from "../products/cards/RatingStars";
import PriceSection from "../products/cards/PriceSection";
import { Product } from "@/types";

const CartProduct = ({ product }: { product: Product | null }) => {
    const router = useRouter();
    const { removeFromCart, addToCart, decrementFromCart, cart } = useCart();
    const quantity = cart.find((item) => item.id === product?.id)?.length ?? 0;

    useEffect(() => {
        router.prefetch(`/shop/${product?.id}`);
    }, [product?.id, router]);

    const handleNavigation = () => {
        router.push(`/shop/${product?.id}`);
    };

    const handleRemove = (e: React.MouseEvent) => {
        e.stopPropagation();
        removeFromCart(product ? product.id : 0);
    };

    return (
        <div
            onClick={handleNavigation}
            title={product?.title}
            className="relative flex gap-6 w-full items-center bg-[var(--card-background)] border border-[var(--border)] p-2"
        >
            <button
                onClick={handleRemove}
                className="absolute top-2 right-2 text-[var(--foreground)] bg-gray-200 w-8 h-8 hover:bg-gray-300 rounded-full text-xs md:text-sm z-10"
                aria-label={`Remove ${product?.title} from cart`}
                title={`Remove ${product?.title} from cart`}
            >
                ✕
            </button>


            <div className="relative w-28 h-28 md:w-36 md:h-36 bg-[var(--card-background)] rounded overflow-hidden flex-shrink-0">
                <Image
                    src={product?.thumbnail ?? ""}
                    alt={product?.title ?? ""}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                />
            </div>

            <div className="flex flex-col justify-between leading-normal">
                <h3 className="mb-2 text-md md:text-2xl font-bold tracking-tight">
                    {product?.title}
                </h3>

                <PriceSection
                    discountPercentage={product?.discountPercentage}
                    price={product?.price}
                    mainText="text-sm md:text-lg"
                    secText="text-xs md:text-sm"
                />

                <div className="flex items-center gap-3 mt-3">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            decrementFromCart(product?.id ?? 0);
                        }}
                        className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300"
                        aria-label={`Decrease ${product?.title} quantity`}
                    >
                        ➖
                    </button>

                    <span className="px-2 font-semibold">{quantity}</span>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            addToCart(product?.id ?? 0);
                        }}
                        className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300"
                        aria-label={`Increase ${product?.title} quantity`}
                    >
                        ➕
                    </button>
                </div>


                <div className="flex flex-col items-start gap-1 mt-3">
                    <span className="bg-gray-900 text-white text-xs px-2 py-0.5 rounded">
                        {product?.category}
                    </span>

                    <div className="flex items-center text-xs text-[var(--foreground-muted)]">
                        <RatingStars className="inline-flex gap-1" rating={Math.round(product ? product.rating : 0)} />
                        <span className="pl-2">({product?.rating} ratings)</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartProduct;
