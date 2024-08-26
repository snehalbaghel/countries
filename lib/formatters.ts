import { Country, Name } from "@/lib/api.types";

/**
 * @param timezones Timezones of the country (in order)
 * @returns Formatted string of the timezone/timezone range
 */
export function formatTimezones(timezones: string[]) {
  let out = "";
  if (timezones.length === 1) {
    out = timezones[0];
  } else {
    out = `${timezones[0]} to ${timezones[timezones.length - 1]}`;
  }

  if (out === "UTC") {
    return "+0:00";
  }

  return out.replaceAll("UTC", "");
}

/**
 * @param name Name object of the country
 * @returns Comma separated string of native names
 */
export function formatNativeNames(name: Name) {
  const { nativeName } = name;
  if (nativeName === undefined) {
    return name.official;
  }

  return Object.keys(nativeName)
    .map((key) => nativeName[key].official)
    .join(", ");
}

/**
 * @param currencies Currencies obj of the country
 * @returns Comma separated string of currencies and their symbol
 */
export function formatCurrencies(currencies: Country["currencies"]) {
  if (currencies === undefined) {
    return "NA";
  }

  return Object.keys(currencies)
    .map((curr) => {
      const currency = currencies[curr];

      return `${currency.name} (${currency.symbol})`;
    })
    .join(", ");
}

/**
 *
 * @param languages Languages obj of the country
 * @returns Comma separated string of languages
 */
export function formatLanguages(languages: Country["languages"]) {
  if (languages === undefined) {
    return "NA";
  }

  return Object.keys(languages)
    .map((key) => languages[key])
    .join(", ");
}
