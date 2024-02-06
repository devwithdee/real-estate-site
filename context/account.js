"use client"
import React, { createContext, useContext, useState } from 'react';

const AccountContext = createContext();

export const AccountProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AccountContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AccountContext.Provider>
  );
};

export const useAccount = () => {
  const context = useContext(AccountContext);
  if (!context) {
    throw new Error("useAccount must be used within an AccountProvider");
  }
  return context;
};