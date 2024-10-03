// src/context/DataContext.js
import React, { createContext, useState } from 'react';

// Create the context
export const DataContext = createContext();

// Create a provider component
export const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);

    const addData = (newData) => {
        setData((prevData) => [...prevData, newData]);
    };

    return (
        <DataContext.Provider value={{ data, addData }}>
            {children}
        </DataContext.Provider>
    );
};
