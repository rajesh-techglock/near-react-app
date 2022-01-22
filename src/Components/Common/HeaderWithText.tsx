import React from "react";

const HeaderWithText = ({
  heading,
  setOtpScreen,
}: {
  heading: string;
  setOtpScreen: (data: boolean) => void;
}) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-with-text border-bottom">
        <div className="container-md d-flex justify-content-center">
          <b>{heading}</b>
        </div>
        <button className="close-icon" onClick={() => setOtpScreen(false)}>
          <i className="fa fa-times"></i>
        </button>
      </nav>
    </>
  );
};

export default HeaderWithText;
