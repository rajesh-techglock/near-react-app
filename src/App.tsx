import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "./assets/scss/style.scss";
import AppRoutes from "./Components/AppRoutes";
import Loader from "./Components/Common/Loader";
import AuthLayout from "./Components/Layouts/AuthLayout";
import RegisterComponent from "./Pages/Register/RegisterComponent";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
const App = () => {
  toastr.options = {
    positionClass: "toast-bottom-full-width",
    hideDuration: 100,
    timeOut: 4000,
  };
  return (
    <>
      <div className="main-content">
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
      </div>
    </>
  );
};

export default App;
