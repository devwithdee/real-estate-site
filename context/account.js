"use client"
import React, { createContext, useContext, useState } from 'react';

const AccountContext = createContext();

export const AccountProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userFirstName, setFirstName] = useState('');
  const [userLastName, setLastName] = useState('');
  const [userEmail, setEmail] = useState('');
  const [userId, setUserId] = useState(null);

  return (
    <AccountContext.Provider value={{ userId, setUserId, isLoggedIn, setIsLoggedIn, userFirstName, setFirstName, userLastName, setLastName, userEmail, setEmail }}>
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