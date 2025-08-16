"use client"
import { getCategories } from "@/services/productService";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const CategoryPopup = ({ setPopup }: { setPopup(str: boolean): void }) => {
    const [categories, setCategories] = useState<string[]>([]);
    useEffect(() => {
        const fetchCategories = async () => {
            const data = await getCategories();
            data.unshift('all');
            setCategories(data);
        };
        fetchCategories();
    }, []);
    const router = useRouter();
    const setRoute = (cat: string): void => {
        router.push(cat === 'all' ? '/shop' : `/shop?category=${cat}`);
        setPopup(false);
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
            <div className="h-[90vh] w-[90vw] max-w-md bg-[var(--background)] border border-[var(--border)] rounded-xl p-6 shadow-xl relative size-full overflow-y-auto">
                <h1 className="mb-4 text-lg font-semibold text-[var(--foreground)]">Categories:</h1>

                <button
                    className="absolute right-0 cursor-pointer top-0 text-white bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition"
                    onClick={() => setPopup(false)}
                >
                    Close
                </button>
                <div className="flex flex-col gap-3">
                    {categories.map((category: string, index: number) => (
                        <div key={`cat-${index}`} onClick={() => setRoute(category)} className="bg-[var(--background-alt)] cursor-pointer border border-[var(--border)] px-5 py-2 rounded-md text-sm font-medium text-[var(--foreground)] hover:bg-white hover:text-[var(--hover)] transition-all duration-300">
                            {category.toUpperCase()}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoryPopup;