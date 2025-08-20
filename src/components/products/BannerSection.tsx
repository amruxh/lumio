import Image from "next/image"
import Link from "next/link"

const BannerSection = () => {
    const images = [
        {
            id: 79,
            title: 'Asus Zenbook Pro Dual Screen Laptop',
            desc: 'Dual Screen Laptop is a high-performance device with dual screens',
            src: '/banners/asus-zen.jpeg',
        },
        {
            id: 159,
            title: 'iPad Mini 2021 Starlight',
            desc: 'Compact and powerful tablet from Apple.',
            src: '/banners/ipad-mini.jpg'
        },
        {
            id: 7,
            title: 'Chanel Coco Noir Eau De',
            desc: 'Elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood.',
            src: '/banners/perfume.jpg'
        },
        {
            id: 136,
            title: 'Vivo X21',
            desc: 'Premium smartphone with a focus on cutting-edge technology.',
            src: '/banners/vivo-x21.jpg'
        },
    ]
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {images.map((image, index) => (
                <Link
                    href={'/shop/' + image.id}
                    key={"banner-" + index}
                    className="relative w-full h-60 overflow-hidden rounded-lg shadow-lg group"
                >
                    <Image
                        src={image.src}
                        alt={image.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="absolute object-cover transition-transform duration-300 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 z-10 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 text-center">
                        <div className="text-white">
                            <h3 className="font-bold text-2xl md:text-3xl">{image.title}</h3>
                            <p className="mt-1 text-sm md:text-base">{image.desc}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default BannerSection