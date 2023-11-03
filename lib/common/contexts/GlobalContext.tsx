import React, { createContext, PropsWithChildren, useContext, useEffect, useRef, useState } from 'react';
import { useColorScheme } from 'nativewind';

interface IGlobalContext {
  colorScheme: any,
  toggleColorScheme: () => void
}

const GlobalContext = createContext<IGlobalContext | undefined>(undefined);

export const GlobalContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
   const { colorScheme, toggleColorScheme } = useColorScheme();

   useEffect(() => {
      setInterval(()=> {
         toggleColorScheme();
         console.log('WTFFFF', colorScheme);

      }, 3000);
   }, []);
   return (
      <GlobalContext.Provider value={{ colorScheme, toggleColorScheme }}>
         {children}
      </GlobalContext.Provider>
   );
};

export const useGlobalContext = () => useContext(GlobalContext)!;