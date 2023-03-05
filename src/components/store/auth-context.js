import React, { useState } from "react";

export const AuthContext = React.createContext({
  token: "",
  isLoggedIn: "false",
  login: (token) => {},
  logout: () => {},
});

const AuthProvirer = (props) => {
  const localtoken = localStorage.getItem("token");
  const [token, setToken] = useState(localtoken);
  const userLoggedIn = Boolean(token);
  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };
  const logoutHandler = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  const valueContext = {
    token: token,
    isLoggedIn: userLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={valueContext}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvirer;
