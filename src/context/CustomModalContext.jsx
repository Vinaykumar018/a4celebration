// CustomModalContext.jsx
import { createContext, useContext, useState } from 'react';

const CustomModalDataContext = createContext();

export const CustomModalDataProvider = ({ children }) => {
  const [customModalData, setCustomModalData] = useState(null);

  return (
    <CustomModalDataContext.Provider value={{ customModalData, setCustomModalData }}>
      {children}
    </CustomModalDataContext.Provider>
  );
};

export const useCustomModalData = () => useContext(CustomModalDataContext);
