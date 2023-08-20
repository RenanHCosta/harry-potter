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
  filteredCharacters: Character[];
  pageCharacters: Character[];
};

type CharactersContextType = InitialStateType & {
  nextPage: () => void;
  prevPage: () => void;
  updateSearchQuery: (query: string) => void;
  totalPages: number;
};

const INITIAL_STATE: InitialStateType = {
  list: [],
  loading: true,
  currentPage: 1,
  itemsPerPage: 8,
  filteredCharacters: [],
  pageCharacters: [],
};

export const CharactersContext = createContext<CharactersContextType>({
  ...INITIAL_STATE,
  nextPage: () => {},
  prevPage: () => {},
  updateSearchQuery: () => {},
  totalPages: 1,
});

export const CharactersProvider = ({ children }: CharactersProviderProps) => {
  const [state, setState] = useState<InitialStateType>(INITIAL_STATE);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const startIndex = (state.currentPage - 1) * state.itemsPerPage;
  const endIndex = startIndex + state.itemsPerPage;
  const pageCharacters = searchQuery
    ? state.filteredCharacters.slice(startIndex, endIndex)
    : state.list.slice(startIndex, endIndex);
  const totalPages = searchQuery
    ? Math.ceil(state.filteredCharacters.length / state.itemsPerPage)
    : Math.ceil(state.list.length / state.itemsPerPage);

  const goToPage = (pageNumber: number) => {
    setState((prevState) => ({
      ...prevState,
      currentPage: pageNumber,
    }));
  };

  const nextPage = () => {
    const nextPage = Math.min(state.currentPage + 1, totalPages);
    goToPage(nextPage);
  };

  const prevPage = () => {
    const prevPage = Math.max(state.currentPage - 1, 1);
    goToPage(prevPage);
  };

  const updateSearchQuery = (query: string) => {
    setSearchQuery(query);
    goToPage(1); // Reset to first page when search query changes
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

  useEffect(() => {
    if (searchQuery) {
      const filteredCharacters = state.list.filter((character) =>
        character.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

      setState((prevState) => ({
        ...prevState,
        filteredCharacters: filteredCharacters,
        loading: false,
      }));
    }
  }, [searchQuery, state.list]);

  return (
    <CharactersContext.Provider
      value={{
        ...state,
        nextPage,
        prevPage,
        updateSearchQuery,
        pageCharacters,
        totalPages,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};
