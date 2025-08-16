'use client'

import { useState } from "react";
import Image from "next/image";
import { Product } from "@/types";

const ImageContainer = ({ productDetails }: { productDetails: Product | null }) => {
  const [selected, setSelected] = useState(0);
  const imageSrc = productDetails?.images[selected] ?? productDetails?.images[0];

  return (
    <div className="flex-1 flex flex-col items-center gap-5">
      <Image
        src={imageSrc ?? ''}
        alt={productDetails?.title ?? ''}
        className="w-70 md:w-1/2 bg-[var(--background-alt)]"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        height={100}
        width={100}
      />
      <div className="extra-images flex gap-2">
        {
        
        productDetails?.images?.map((image: string, index: number) => (
          <Image
            src={image}
            key={`image-${productDetails.id}-${index}`}
            alt={`image-${index}`}
            height={50}
            width={50}
            onClick={() => setSelected(index)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setSelected(index);
            }}
            tabIndex={0}
            role="button"
            aria-label={`Select image ${index + 1}`}
            className={`object-contain bg-white border-2 cursor-pointer hover:border-green-400 ${
              selected === index ? "border-green-400" : "border-transparent"
            }`}
          />
        ))}
      </div>

    </div>
  );
};

export default ImageContainer;
