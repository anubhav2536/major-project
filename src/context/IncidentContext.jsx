import { useContext, createContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
export const IncidentContext = createContext();
import { useEffect } from "react";
const IncidentContextProvider = ({ children }) => {
  const { userName } = useContext(AuthContext);
  console.log(userName);
  const [incidents, setIncidents] = useState([]);
  useEffect(() => {
    const getIncidentData = async () => {
      // console.log(user);
      const response = await axios.get(
        `http://localhost:8080/api/users/getAllIncidents/${userName}`
      );
      setIncidents(response.data);
    };
    getIncidentData();
  }, []);

  return (
    <IncidentContext.Provider value={{ incidents, setIncidents }}>
      {children}
    </IncidentContext.Provider>
  );
};

export default IncidentContextProvider;
