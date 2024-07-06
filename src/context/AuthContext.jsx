import { createContext, useState } from "react";
import AuthService from "../api/auth";

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() =>
    JSON.parse(localStorage.getItem("user"))
  );

  const login = async (username, password) => {
    try {
      const res = await AuthService.login(username, password);
      console.log("Login response:", res);
      const userData = { username, token: res.data.token };
      localStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);

      return res;
    } catch (e) {
      console.error("Login failed:", e);
      throw e;
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
