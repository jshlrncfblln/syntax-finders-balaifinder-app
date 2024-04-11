import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { backendurl } from "../../backend-connector";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    const res = await axios.post(`${backendurl}/api/auth/login`, inputs, {
      withCredentials: true,
    });

    setCurrentUser(res.data)
  };

  const logout = async () => {
    try {
      await axios.post(`${backendurl}/api/auth/logout`, null, {
        withCredentials: true,
      });
      setCurrentUser(null);
      localStorage.removeItem("user");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}> {/* Include logout in the context value */}
      {children}
    </AuthContext.Provider>
  );
};
