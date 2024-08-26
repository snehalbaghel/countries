import CountryDetails from "./components/country-details";
import { Country } from "@/lib/api.types";
import { fetchCountryData } from "@/lib/fetchCountryData";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateMetadata({
  params,
}: {
  params: { cca3: string };
}): Metadata {
  // read route params
  return {
    title: `Country Directory | ${params.cca3}`,
  };
}

export default async function CountryPage({
  params,
}: {
  params: { cca3: string };
}) {
  const { cca3 } = params;

  const countriesData: Country[] = await fetchCountryData();
  const activeCountry = countriesData.find((c) => c.cca3 == cca3);
  const borders = countriesData.filter((country) =>
    activeCountry?.borders?.includes(country.cca3)
  );

  if (!activeCountry) {
    notFound();
  }

  return (
    <>
      <div
        className="fixed inset-0 bg-canvas w-full h-full md:relative md:col-span-2"
        style={{ backgroundColor: "canvas" }}
      >
        <CountryDetails country={activeCountry} borders={borders} />
      </div>
    </>
  );
}
