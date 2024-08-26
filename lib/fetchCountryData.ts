import { Country } from "@/lib/api.types";
import { REST_COUNTRIES_BASE_URL } from "@/constants";

const REQUIRED_FIELDS = [
  "name",
  "cca3",
  "unMember",
  "currencies",
  "capital",
  "region",
  "languages",
  "area",
  "flag",
  "population",
  "timezones",
  "continents",
  "flags",
  "subregion",
  "borders",
  "maps",
  "latlng",
];

const fetchUrl = new URL("/v3.1/all", REST_COUNTRIES_BASE_URL);
fetchUrl.searchParams.append("fields", REQUIRED_FIELDS.join(","));

export async function fetchCountryData() {
  const countriesResponse = await fetch(fetchUrl, {
    method: "GET",
    cache: "force-cache",
  });

  const countriesData: Country[] = await countriesResponse.json();

  return countriesData;
}
