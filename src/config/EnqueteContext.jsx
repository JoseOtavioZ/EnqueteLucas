import React, { createContext, useContext } from "react";

const EnqueteContext = createContext();
export const useEnquetes = () => useContext(EnqueteContext);

const EnqueteProvider = ({ children }) => {
  return <EnqueteContext>{children}</EnqueteContext>;
};
export default EnqueteProvider;
