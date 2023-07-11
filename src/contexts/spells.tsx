import { createContext, useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { ThemeProvider } from 'styled-components';

interface Spells {
  spells: {
    count: number;
    results: {
      index: string;
      name: string;
      url: string;
    }[];
  };
}

export const SpellsContext = createContext({} as Spells);

export const SpellsProvider: React.FC<{ children: any }> = ({ children }) => {
  const { data: spells } = useQuery('spells', async () => {
    const response = await fetch('https://www.dnd5eapi.co/api/spells');
    const data = await response.json();

    return data;
  });

  const values: Spells = {
    spells,
  };

  return (
    <SpellsContext.Provider value={values}>{children}</SpellsContext.Provider>
  );
};

export const useSpells = (): Spells => useContext(SpellsContext);
