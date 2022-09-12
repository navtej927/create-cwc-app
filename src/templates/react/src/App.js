import React from "react";
import Styles from "./app.module.css";
import { Footer } from "./Footer";
import { Header } from "./Header";

const App = () => {
  return (
    <React.StrictMode>
      <Header />
      <div className={Styles.container}>hello fresh</div>
      <Footer />
    </React.StrictMode>
  );
};

export default App;
