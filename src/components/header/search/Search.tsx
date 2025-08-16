"use client"
import { Search as SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { showSuggestion } from "@/functions/utils";
import { useRouter, useSearchParams } from "next/navigation";

const Search = () => {
  const searchParams = useSearchParams();
  const [suggested, setSuggested] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

    useEffect(() => {
    const initialQuery = searchParams.get("query");
    if (initialQuery) setSearchQuery(initialQuery);
  }, [searchParams]);

  const handleChange = async (value: string) => {
    setSearchQuery(value);
    if (value.trim().length === 0) {
      setSuggested([]);
      return;
    }
    const suggestions: string[] | [] = await showSuggestion(value);
    setSuggested(suggestions);
  };

  const handleClick = (q: string): void => {
    setSuggested([]);
    setSearchQuery(q);
    router.push(`?query=${q}`);
  };

  return (
    <div
      className={`flex items-center gap-3 w-full md:max-w-xs min-w-40 rounded-xl border px-3.5 py-2 border-[var(--border)] bg-[var(--card-background)] relative ${searchQuery.length > 0 ? 'flex-row-reverse' : 'flex-row'}`}
      onBlur={() => setTimeout(() => setSuggested([]), 300)}
    >
      <SearchIcon
        className="text-neutral-600 cursor-pointer"
        role="button"
        onClick={() => handleClick(searchQuery)}
      />
      <input
        type="text"
        placeholder="Search Product.."
        className="outline-0 w-full h-full bg-transparent"
        value={searchQuery}
        onChange={(e) => handleChange(e.target.value)}
        onFocus={() => searchQuery.length > 0 && setSuggested(suggested)}
      />
      {suggested.length > 0 && (
        <div className="absolute top-full left-0 w-full max-h-60 overflow-y-auto bg-[var(--background-alt)] border border-[var(--border)] mt-1 z-20 rounded-lg shadow-lg">
          {suggested.map((item, index) => (
            <div
              role="button"
              key={`search-${index}`}
              tabIndex={0}
              onClick={() => handleClick(item)}
              className="w-full px-3 py-2  hover:bg-[var(--background)] hover:text-[var(--hover)] transition-colors cursor-pointer"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
