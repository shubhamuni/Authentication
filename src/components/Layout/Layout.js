<<<<<<< HEAD
import { Fragment } from 'react';

import MainNavigation from './MainNavigation';
=======
import { Fragment } from "react";

import MainNavigation from "./MainNavigation";
>>>>>>> 711788057f81dbb8c7690b4b08a1fc11a3950d03

const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
