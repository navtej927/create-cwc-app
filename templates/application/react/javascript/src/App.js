import React from "react";

const App = () => {
  return (
    <React.StrictMode>
      <div>{process.env.APP_NAME}</div>
    </React.StrictMode>
  );
};

export { App };
