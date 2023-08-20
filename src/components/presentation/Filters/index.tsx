import { ChangeEvent, useEffect, useState } from "react";

import SearchIcon from "assets/images/svg/icon-search.svg";

import "./Filters.style.scss";
import { useDebounce } from "@/hooks/use-debounce";
import { useCharacters } from "@/hooks/use-characters";

function Filters() {
  const { updateSearchQuery } = useCharacters();
  const [search, setSearch] = useState<string>("");
  const debouncedSearch = useDebounce<string>(search, 500);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch(value);
  };

  useEffect(() => {
    updateSearchQuery(debouncedSearch);
  }, [debouncedSearch]);

  return (
    <div className="filters">
      <div className="filters__house">
      </div>
      <div className="filters__search">
        <label>
          <img
            src={SearchIcon}
            loading="lazy"
            alt="Search icon"
            width={16}
            height={16}
          />Encontre seu bruxo:
        </label>
        <input
          type="search"
          className="filters__search--input"
          placeholder="Avada Kedrava"
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default Filters;
