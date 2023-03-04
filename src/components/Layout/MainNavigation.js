import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../store/auth-context";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);
  const islogin = authCtx.isLoggedIn;
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!islogin && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {islogin && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {islogin && (
            <li>
              <button onClick={authCtx.logout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
