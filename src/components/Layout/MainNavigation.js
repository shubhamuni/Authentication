<<<<<<< HEAD
import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';
=======
import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";
>>>>>>> 711788057f81dbb8c7690b4b08a1fc11a3950d03

const MainNavigation = () => {
  return (
    <header className={classes.header}>
<<<<<<< HEAD
      <Link to='/'>
=======
      <Link to="/">
>>>>>>> 711788057f81dbb8c7690b4b08a1fc11a3950d03
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          <li>
<<<<<<< HEAD
            <Link to='/auth'>Login</Link>
          </li>
          <li>
            <Link to='/profile'>Profile</Link>
=======
            <Link to="/auth">Login</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
>>>>>>> 711788057f81dbb8c7690b4b08a1fc11a3950d03
          </li>
          <li>
            <button>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
