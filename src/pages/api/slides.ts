// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { CarouselData } from "@/types";

const data = [
  {
    id: 78,
    image: "/MacBook-Pro-Banner.jpg",
    title: "MacBook 14 Pro",
    description: "Featuring Apple's M1 Pro chip for exceptional performance"
  },
  {
    id: 126,
    image: "/oppo.jpg",
    title: "Oppo F19 Pro Plus",
    description: "Feature-rich smartphone with a focus on camera capabilities."
  },
  {
    id: 79,
    image: "/zenbook.jpg",
    title: "Asus Zenbook Pro Dual Screen Laptop",
    description: "Dual Screen Laptop is a high-performance device with dual screens"
  },
  {
    id: 136,
    image: "/vivo-x21.jpg",
    title: "Vivo X21",
    description: "Premium smartphone with a focus on cutting-edge technology"
  }
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CarouselData[]>,
) {
  res.status(200).json(data);
}
