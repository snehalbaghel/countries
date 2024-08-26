import { Country } from "@/lib/api.types";
import Link from "next/link";

export default function BorderingCountryItem({
  country,
}: {
  country: Country;
}) {
  const { flag, name, capital, continents } = country;

  return (
    <Link href={`/${country.cca3}`}>
      <li className="overflow-hidden group cursor-pointer w-full rounded-lg">
        <div className="flex items-center gap-x-4 p-2 px-1">
          <span className="text-4xl bg-white ring-1 ring-gray-900/10 rounded-md p-1 group-hover:bg-slate-50">
            {flag}
          </span>
          <div className="flex-none shrink">
            <div className="text-base font-medium leading-6 text-gray-900 group-hover:underline text-wrap">
              {name.common}
            </div>
            <div className="text-sm leading-6 text-gray-900">
              {capital?.[0]}
            </div>
            <div className="text-sm text-gray-500">{continents.join(", ")}</div>
          </div>
        </div>
      </li>
    </Link>
  );
}
