import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import AuthProvirer from "./components/store/auth-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvirer>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvirer>
);
