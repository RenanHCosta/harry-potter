import { ChangeEvent, useEffect, useState } from "react";
import { useCharacters, useDebounce } from "@/hooks";

import SearchIcon from "assets/images/svg/icon-search.svg";
import HouseIcon from "assets/images/svg/icon-house.svg";

import "./Filters.style.scss";

const houses = ["gryffindor", "slytherin", "ravenclaw", "hufflepuff"];

function Filters() {
  const { updateSearchQuery, updateHouseFilter, houseFilter } = useCharacters();
  const [search, setSearch] = useState<string>("");
  const debouncedSearch = useDebounce<string>(search, 500);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch(value);
  };

  const handleHouseClick = (house: string) => {
    updateHouseFilter(house);
  };

  useEffect(() => {
    updateSearchQuery(debouncedSearch);
  }, [debouncedSearch]);

  return (
    <div className="filters">
      <div className="filters__house">
        <span className="filters__house--label">
          <img
            src={HouseIcon}
            loading="lazy"
            alt="House filter icon"
            width={16}
            height={16}
          />Escolha sua casa:
        </span>
        <ul>
          {houses.map((house) => (
            <li key={house}>
              <img
                alt={house}
                src={`/svg/${house}.svg`}
                onClick={() => handleHouseClick(house)}
                width={48}
                height={48}
                className={houseFilter === house ? "active" : ""}
              />
            </li>
          ))}
        </ul>
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
          placeholder="Revelio"
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default Filters;
