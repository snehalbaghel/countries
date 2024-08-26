"use client";

import SearchIcon from "@/lib/icons/SearchIcon";
import { useSearch } from "@/lib/context/SearchContext";

export default function SearchInput() {
  const [_searchValue, setSearchValue] = useSearch();

  return (
    <>
      <div className="absolute top-0 bottom-0 left-0 flex items-center pl-7">
        <SearchIcon className="w-5 h-5 text-gray-400" />
      </div>
      <input
        id="search"
        name="search"
        type="search"
        placeholder="Search countries..."
        autoComplete="off"
        onInput={(e) => setSearchValue((e.target as HTMLInputElement).value)}
        className="w-full rounded-xl border-0 pl-12 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 text-base leading-8"
      />
    </>
  );
}
