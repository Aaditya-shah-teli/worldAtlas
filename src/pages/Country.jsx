import React, { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import { Loader } from "../components/UI/Loader";
import { CountryCard } from "../components/Layout/CountryCard";
import { SearchFilter } from "../components/UI/SearchFilter";

export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState(""); // Changed from `[]` to `""`
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    startTransition(async () => {
      try {
        const res = await getCountryData();
        setCountries(res.data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    });
  }, []);

  if (isPending) return <Loader />;

  const searchCountry = (country) => {
    if (!search) return true;
    return country.name.common.toLowerCase().includes(search.toLowerCase());
  };

  const filterCountries = countries.filter(searchCountry);

  return (
    <section className="country-section">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
      />
      <ul className="grid grid-four-cols">
        {filterCountries.map((curCountry) => (
          <CountryCard Country={curCountry} key={curCountry.cca3} /> // Use a unique key
        ))}
      </ul>
    </section>
  );
};