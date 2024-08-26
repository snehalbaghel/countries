"use client";

import { Country } from "@/lib/api.types";
import CountryListItem from "./country-list-item";
import { useSearch } from "../../lib/context/SearchContext";

export default function CountryList(props: { countries: Country[] }) {
  const { countries } = props;
  const [searchValue, _setSearchValue] = useSearch();

  return (
    <ul role="list" className="-mt-4 divide-y divide-gray-100">
      {countries
        .filter((c) =>
          c.name.common.toLowerCase().startsWith(searchValue.toLowerCase())
        )
        .map((country) => (
          <CountryListItem country={country} key={country.cca3} />
        ))}
    </ul>
  );
}
