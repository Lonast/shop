import React from "react";
import "./errorPage.css";

const ErrorPage: React.FC = () => {
  return (
    <div className="error">
      <h1 className="error__text">Sorry, server is not avaliable :(</h1>
    </div>
  );
};

export default ErrorPage;
