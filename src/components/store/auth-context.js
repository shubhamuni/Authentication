import React, { useState } from "react";

export const AuthContext = React.createContext({
  token: "",
  isLoggedIn: "false",
  login: (token) => {},
  logout: () => {},
});

const AuthProvirer = (props) => {
  const [token, setToken] = useState(null);
  const userLoggedIn = Boolean(token);
  const loginHandler = (token) => {
    setToken(token);
  };
  const logoutHandler = () => {
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
