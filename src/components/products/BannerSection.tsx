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
        <div className="flex flex-wrap">
            {images.map((image, index) => (
                <Link
                    href={'/shop/' + image.id}
                    key={"banner-" + index}
                    className="relative w-full md:w-1/2 h-60 md:h-100">

                    <Image
                        src={image.src}
                        alt={image.title}
                        fill
                        sizes="(max-width: 768px) 100vw,
                   (max-width: 1200px) 50vw,
                   33vw"
                        className="absolute object-cover"
                    />

                    {/* Overlay */}
                    <div className="relative group size-full">
                        {/* Overlay */}
                        <div className="absolute inset-0 z-10 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                            <div className="text-[var(--background)] text-center">
                                <h3 className="font-bold text-3xl">{image.title}</h3>
                                <p className="text-[var(--foreground-muted)]">{image.desc}</p>
                            </div>
                        </div>
                    </div>

                </Link>
            ))}
        </div>
    )
}

export default BannerSection

