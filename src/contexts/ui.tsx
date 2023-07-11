import { createContext, useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { ThemeProvider } from 'styled-components';

interface Ui {
  hidden: boolean;
  setHidden: (hidden: boolean) => void;
}

export const UiContext = createContext({} as Ui);

export const UiProvider: React.FC<{ children: any }> = ({ children }) => {
  const [hidden, setHidden] = useState(false);

  const values: Ui = {
    hidden,
    setHidden,
  };

  return <UiContext.Provider value={values}>{children}</UiContext.Provider>;
};

export const useUi = (): Ui => useContext(UiContext);
