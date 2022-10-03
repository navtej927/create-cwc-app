import React from "react";
import "./App.scss";

const App = () => {
  return (
    <React.StrictMode>
      <div className="container">{process.env.APP_NAME} APPLICATION</div>
    </React.StrictMode>
  );
};

export { App };
