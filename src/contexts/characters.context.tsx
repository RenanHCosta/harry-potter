import { Character } from "@/interfaces/character";
import { createContext, useState, useEffect } from "react";
import apiService from "services/api-service";

type CharactersProviderProps = {
    children: React.ReactNode;
}

type InitialStateType = {
  list: Character[];
  loading: boolean;
};

const INITIAL_STATE: InitialStateType = {
  list: [],
  loading: true,
};

export const CharactersContext = createContext<InitialStateType>(INITIAL_STATE);

export const CharactersProvider = ({ children }: CharactersProviderProps) => {
  const [state, setState] = useState<InitialStateType>(INITIAL_STATE);

  useEffect(() => {
    async function fetchAll() {
      try {
        setState((prevState) => ({ ...prevState, loading: true }));

        const { data } = await apiService.characters.findAll();
        
        setState({ list: data as Character[], loading: false });
      } catch {
        setState((prevState) => ({ ...prevState, loading: false }));
        throw new Error('Failed to retrieve characters');
      }
    }

    fetchAll();
  }, []);

  return (
    <CharactersContext.Provider
      value={state}
    >
      {children}
    </CharactersContext.Provider>
  );
}