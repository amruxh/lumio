import Offers from "@/components/products/Offers";
import Carousel from "@/components/carousel/Carousel";
import { getAllProducts, getCarouselData } from '@/services/productService';
import { GetServerSideProps } from "next";
import { CarouselData, Products } from "@/types";
import BannerSection from "@/components/products/BannerSection";

type HomeProps = {
  slides: CarouselData[];
  offers: Products | null
};

export default function Home({ slides, offers }: HomeProps) {
  return (
    <section>
      <div className="flex flex-col items-center">
        <div className="w-full h-[200px] md:h-1/2">
          <Carousel slides={slides} />
        </div>
      </div>

      <div>
        <h1 id='offers' className='ml-5 my-3 font-semibold text-2xl'>Best Offers:</h1>
        <Offers productsData={offers} />
      </div>

      <div className="my-6">
        <h1 className='ml-5 my-3 font-semibold text-2xl'>Most Selling Products</h1>
        <BannerSection />
      </div>
    </section>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const data = await getCarouselData();
  const offersData = await getAllProducts();
  return {
    props: {
      slides: data,
      offers: offersData
    },
  };
};