// TranslationContext.jsx
import React, { createContext, useContext } from 'react';
import { useTranslation } from 'react-i18next';

const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const { t } = useTranslation();

  return (
    <TranslationContext.Provider value={{ t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslationContext = () => useContext(TranslationContext);
