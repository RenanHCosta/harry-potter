import { useContext } from "react";
import { CharactersContext } from "contexts/characters.context";

const useCharacters = () => useContext(CharactersContext);

export default useCharacters
