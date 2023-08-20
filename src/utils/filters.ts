import { Character } from "@/interfaces/character";

export const filterCharacters = (
  characters: Character[],
  searchQuery: string,
  houseFilter: string
) => {
  return characters.filter((character) => {
    const nameMatches = character.name.toLowerCase().includes(searchQuery.toLowerCase());
    const houseMatches = character.house.toLowerCase() === houseFilter.toLowerCase();
    return (!searchQuery || nameMatches) && (!houseFilter || houseMatches);
  });
};