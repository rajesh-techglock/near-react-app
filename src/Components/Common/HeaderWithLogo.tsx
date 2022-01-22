import React from "react";
import Logo from "../../assets/images/logo.png";
const HeaderWithLogo: React.FC = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-with-logo border-bottom">
        <div className="container-md d-flex justify-content-center">
          <img src={Logo} alt="logo" />
        </div>
      </nav>
    </>
  );
};

export default HeaderWithLogo;
