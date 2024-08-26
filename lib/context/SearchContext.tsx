"use client";

import React from "react";

const SearchContext = React.createContext<
  [string, React.Dispatch<React.SetStateAction<string>>] | undefined
>(undefined);

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [searchValue, setSearchValue] = React.useState("");
  return (
    <SearchContext.Provider value={[searchValue, setSearchValue]}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = React.useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
}
