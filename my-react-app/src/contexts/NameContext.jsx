import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const NameContext = createContext(null);

export const NameProvider = ({ children }) => {
  const [name, setName] = useState([]);
  return (
    <NameContext.Provider value={{ name, setName }}>
      {children}
    </NameContext.Provider>
  );
};
