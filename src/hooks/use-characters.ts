import { useContext } from "react";
import { CharactersContext } from "contexts/characters.context";

export const useCharacters = () => useContext(CharactersContext);
