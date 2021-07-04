import React, {createContext} from 'react';

export const FavouriteContext = createContext();

export const FavouriteContextProvider = ({children}) => {
  return <FavouriteContext.Provider>{children}</FavouriteContext.Provider>;
};
