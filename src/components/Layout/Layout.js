import AuthProvirer from "../store/auth-context";

import MainNavigation from "./MainNavigation";

const Layout = (props) => {
  return (
    <AuthProvirer>
      <MainNavigation />
      <main>{props.children}</main>
    </AuthProvirer>
  );
};

export default Layout;
