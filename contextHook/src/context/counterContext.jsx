import { createContext, useState } from "react";

export const CounterContex = createContext();

export const CounterContexProvider = ({ children }) => {
  const [count, setCount] = useState(4);
  return (
    <CounterContex.Provider value={{ count, setCount }}>
      {children}
    </CounterContex.Provider>
  );
};
