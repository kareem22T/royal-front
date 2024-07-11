import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(() => localStorage.getItem('userToken'));

  useEffect(() => {
    const token = localStorage.getItem('userToken');
    if (token) {
      setUserToken(token);
    }
  }, []);

  return (
    <AppContext.Provider value={{ userToken, setUserToken }}>
      {children}
    </AppContext.Provider>
  );
};
