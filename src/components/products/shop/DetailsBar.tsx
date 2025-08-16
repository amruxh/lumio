"use client";
import { useState } from "react";
import CategoryPopup from "./CategoryPopup";

const DetailsBar = ({
    details,
}: {
    details: { query?: string | undefined; category?: string | undefined; };
}) => {
    const [popup, setPopup] = useState(false);

    const activeFilter = details?.query || details?.category || "all products";

    return (
        <>
            <div className="flex flex-row justify-between items-center gap-4 p-4 bg-[var(--background)] border-b border-[var(--border)]">
                <span className="text-sm md:text-base font-medium">
                    Showing results for{" "}
                    <span className="text-[var(--active)] italic">&quot;{activeFilter}&quot;</span>
                </span>
                <button
                    onClick={() => setPopup(!popup)}
                    className="bg-[var(--background-alt)] cursor-pointer border border-[var(--border)] px-5 py-2 rounded-xl text-sm font-medium text-[var(--foreground-muted)] hover:bg-[var(--hover)] hover:text-[var(--background)] transition-all duration-300"
                >
                    Show Categories
                </button>

            </div>
            {popup && (
                <CategoryPopup setPopup={setPopup}/>
            )}

        </>
    );
};

export default DetailsBar;

