"use Client";

import React from 'react';
import { createContext } from 'react';
import { useContext } from 'react';

const GlobalContext = createContext();
const GlobalContextUpdate = createContext();

export const GlobalContextProvider = ( { children }) => {};

export const useGlobalContext = () => useContext(GlobalContext);