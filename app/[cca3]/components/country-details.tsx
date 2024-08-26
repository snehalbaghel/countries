import { Country } from "@/lib/api.types";
import Image from "next/image";
import CloseIcon from "@/lib/icons/CloseIcon";
import Link from "next/link";
import UNIcon from "@/lib/icons/UNIcon";
import {
  formatCurrencies,
  formatLanguages,
  formatNativeNames,
} from "@/lib/formatters";
import BorderingCountryItem from "./bordering-country-item";

function Definition({
  term,
  definition,
  children,
}: {
  term: string;
  definition?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="px:0 py-2 md:px-4 md:py-6 grid grid-cols-3 gap-4">
      <dt className="text-sm font-medium leading-6 text-gray-900">{term}</dt>
      <dd className="mt-1 text-sm leading-6 text-gray-700 col-span-2 sm:mt-0">
        {definition ?? children}
      </dd>
    </div>
  );
}

export default function CountryDetails(props: {
  country: Country;
  borders?: Country[];
}) {
  const { country, borders } = props;
  return (
    <>
      <nav className="md:hidden sticky inset-0 w-full bg-white z-10">
        <Link href="/">
          <button className="m-4">
            <CloseIcon className="h-8 w-8" />
          </button>
        </Link>
      </nav>
      <article className="flex h-screen flex-col p-6 pt-2 pb-20 md:p-16 overflow-scroll">
        <div className="flex items-center gap-x-3">
          <h1 className="text-4xl">{country?.name.common}</h1>
          {country.unMember ? <UNIcon className="w-8" /> : null}
        </div>

        <div>
          <h3 className="text-base font-semibold leading-7 text-gray-900">
            {country.name.official}
          </h3>
          <div className="relative w-72 h-48 md:w-96 md:h-64 my-2">
            <Image
              alt={`The flag of ${country.name.official}`}
              src={country.flags.svg}
              fill={true}
              style={{ objectFit: "contain" }}
            />
          </div>
          <span className="text-sm leading-6 italic text-gray-700">
            {country.flags.alt || `The flag of ${country.name.official}`}
          </span>
          <dl className="divide-y divide-gray-100">
            <Definition
              term="Native Name (Official)"
              definition={formatNativeNames(country.name)}
            />
            <Definition
              term="Population"
              definition={country.population.toLocaleString()}
            />
            <Definition
              term="Capital"
              definition={country.capital?.join(", ") ?? "NA"}
            />
            <Definition
              term="Region"
              definition={`${country.region} (${country.subregion})`}
            />
            <Definition
              term="Currency"
              definition={formatCurrencies(country.currencies)}
            />
            <Definition
              term="Languages"
              definition={formatLanguages(country.languages)}
            />
            <Definition term="Area">
              {country.area} km<sup>2</sup>
            </Definition>
            <Definition
              term="Timezones"
              definition={country.timezones.join(", ")}
            />
            <Definition term="Location">
              <a
                className="underline "
                target="_blank"
                href={country.maps.googleMaps}
              >
                {`${country.latlng[0]}°N ${country.latlng[1]}°E`}
              </a>
            </Definition>

            {borders?.length ? (
              <Definition term="Bordering Countries">
                <ul>
                  {borders.map((country) => (
                    <BorderingCountryItem
                      key={country.cca3}
                      country={country}
                    />
                  ))}
                </ul>
              </Definition>
            ) : null}
          </dl>
        </div>
      </article>
    </>
  );
}
