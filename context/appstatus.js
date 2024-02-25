"use client"
import React, { createContext, useContext, useState } from 'react';

const ApplicationContext = createContext();

export const ApplicationProvider = ({ children }) => {
    const [unit, setUnit] = useState(null);
    const [location, setLocation] = useState('');
    const [availability, setAvailability] = useState(null); // Change to null if it should be a date object
    const [beds, setBeds] = useState(null);
    const [appStatus, setAppStatus] = useState("Pending");

  return (
    <ApplicationContext.Provider value={{ appStatus, unit, location, availability, beds, setAvailability, setUnit, setLocation, setBeds }}>
      {children}
    </ApplicationContext.Provider>
  );
};

export const useApplication = () => {
  const context = useContext(ApplicationContext);
  if (!context) {
    throw new Error("useApplication must be used within an AccountProvider");
  }
  return context;
};