import React, { createContext, useContext } from "react";

const EnqueteContext = createContext();
export const useEnquetes = () => useContext(EnqueteContext);

const EnqueteProvider = ({ children }) => {
  const [enquetes, setEnquetes] = useState([]);

  const addEnquete = (enquete) => {
    console.log(enquete);
  };
  return (
    <EnqueteContext value={{ enquetes, setEnquetes }}>
      {children}
    </EnqueteContext>
  );
};
export default EnqueteProvider;
