import { Character } from "@/interfaces/character";
import { createContext, useEffect, useState } from "react";
import apiService from "services/api-service";

type CharactersProviderProps = {
  children: React.ReactNode;
};

type InitialStateType = {
  list: Character[];
  loading: boolean;
  currentPage: number;
  itemsPerPage: number;
  displayedCharacters: Character[];
};

type CharactersContextType = InitialStateType & {
  nextPage: () => void;
  prevPage: () => void;
};

const INITIAL_STATE: InitialStateType = {
  list: [],
  loading: true,
  currentPage: 1,
  itemsPerPage: 8,
  displayedCharacters: [],
};

export const CharactersContext = createContext<CharactersContextType>({
  ...INITIAL_STATE,
  nextPage: () => {},
  prevPage: () => {},
});

export const CharactersProvider = ({ children }: CharactersProviderProps) => {
  const [state, setState] = useState<InitialStateType>(INITIAL_STATE);

  const goToPage = (pageNumber: number) => {
    setState((prevState) => ({
      ...prevState,
      currentPage: pageNumber,
    }));
  };

  const nextPage = () => {
    const totalPages = Math.ceil(state.list.length / state.itemsPerPage);
    const nextPage = Math.min(state.currentPage + 1, totalPages);
    goToPage(nextPage);
  };

  const prevPage = () => {
    const prevPage = Math.max(state.currentPage - 1, 1);
    goToPage(prevPage);
  };

  useEffect(() => {
    async function fetchAll() {
      try {
        setState((prevState) => ({ ...prevState, loading: true }));

        const { data } = await apiService.characters.findAll();

        setState((prevState) => ({
          ...prevState,
          list: data as Character[],
          loading: false,
        }));
      } catch {
        setState((prevState) => ({ ...prevState, loading: false }));
        throw new Error("Failed to retrieve characters");
      }
    }

    fetchAll();
  }, []);

  const startIndex = (state.currentPage - 1) * state.itemsPerPage;
  const endIndex = startIndex + state.itemsPerPage;
  const displayedCharacters = state.list.slice(startIndex, endIndex);
  
  return (
    <CharactersContext.Provider
      value={{ ...state, displayedCharacters, nextPage, prevPage }}
    >
      {children}
    </CharactersContext.Provider>
  );
};
