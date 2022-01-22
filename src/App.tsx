import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "./assets/scss/style.scss";
import AppRoutes from "./Components/AppRoutes";
import Loader from "./Components/Common/Loader";
import AuthLayout from "./Components/Layouts/AuthLayout";
import RegisterComponent from "./Pages/Register/RegisterComponent";
const App = () => {
  return (
    <>
      <Loader>
        <Router>
          <Switch>
            <AppRoutes
              exact
              path="/"
              Layout={AuthLayout}
              Component={RegisterComponent}
            />
          </Switch>
        </Router>
      </Loader>
    </>
  );
};

export default App;
