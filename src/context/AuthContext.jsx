import React, { createContext, useContext, useState } from "react";
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(localStorage.getItem("token"));
  const [userName, setUserName] = useState(localStorage.getItem("user"));

  return (
    <AuthContext.Provider value={{ isLogged, setIsLogged, userName }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
