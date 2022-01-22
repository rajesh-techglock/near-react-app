import React from "react";

const AlreadyHaveAccount = () => {
  return (
    <div className="already-have-account mt-4">
      <p className="mb-0">Already have NEAR account?</p>
      <button className="btn btn-dark text-white mt-3 continue-btn">
        Log in with NEAR{" "}
        <i className="fa fa-angle-right ms-3 fw-bolder" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default AlreadyHaveAccount;
