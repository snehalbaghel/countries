"use client";

import { Country } from "@/lib/api.types";
import { formatTimezones } from "@/lib/formatters";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSearch } from "../../lib/context/SearchContext";
import { TextHighlighter } from "./text-highlighter";

export default function CountryListItem({ country }: { country: Country }) {
  const { flag, name, capital, timezones, continents } = country;
  const pathname = usePathname();
  const [searchValue] = useSearch();

  return (
    // border
    <li>
      <Link
        className="overflow-hidden group cursor-pointer w-full rounded-lg"
        href={`/${country.cca3}`}
      >
        <div
          className={`flex items-center gap-x-4 p-4 px-6 hover:bg-gray-100 ${
            pathname === `/${country.cca3}` ? "bg-blue-50" : ""
          }`}
        >
          <span className="text-4xl bg-white ring-1 ring-gray-900/10 rounded-md p-1 group-hover:bg-slate-50">
            {flag}
          </span>
          <div className="flex-none shrink">
            <div
              className={`text-base font-medium leading-6 text-gray-900 group-hover:underline text-wrap ${
                pathname === `/${country.cca3}` ? "font-semibold" : ""
              }`}
            >
              {searchValue === "" ? (
                <>{country.name.common}</>
              ) : (
                <TextHighlighter
                  text={name.common}
                  highlightRanges={[[0, searchValue.length]]}
                />
              )}
            </div>
            <div className="text-sm leading-6 text-gray-900">
              {capital?.[0]}
            </div>
            <div className="text-sm text-gray-500">{continents.join(", ")}</div>
          </div>
          {/* Only hidden in md cause of lack of space */}
          <div className="flex flex-grow justify-end md:hidden lg:flex">
            <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-800 ring-1 ring-inset ring-blue-700/10">
              {formatTimezones(timezones)}
            </span>
          </div>
        </div>
      </Link>
    </li>
  );
}
