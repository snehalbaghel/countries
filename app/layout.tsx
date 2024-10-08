import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CountryList from "./components/country-listing";
import { SearchProvider } from "@/lib/context/SearchContext";
import SearchInput from "./components/search-input";
import { fetchCountryData } from "@/lib/fetchCountryData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Country Directory",
  description: "",
};

/**
 * This is a server rendered layout which fetches the countries and feeds it to the components
 */
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const countriesData = await fetchCountryData();

  return (
    <html lang="en">
      <body className={inter.className}>
        <SearchProvider>
          <div className="max-w-[90rem] mx-auto md:grid md:grid-cols-3 bg-white">
            <div className="h-screen overflow-scroll">
              <div className="sticky top-0 w-full bg-white text-2xl font-extralight items-center p-4">
                <div className="flex-col items-center">
                  <div>Country Directory</div>
                  <div className="text-xs text-">
                    Powered by{" "}
                    <a
                      className="text-blue-800"
                      target="_blank"
                      href="https://restcountries.com/"
                    >
                      restcountries.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex sticky top-20 px-4 shadow-sm bg-white">
                <SearchInput />
              </div>
              <div className="sticky top-32 h-6 w-full bg-gradient-to-b from-white"></div>
              <CountryList countries={countriesData} />
            </div>
            {children}
          </div>
        </SearchProvider>
      </body>
    </html>
  );
}
