import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
import styles from "../src/components/Movie.module.css";
import "./styles.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h2 className={styles.content}>HoFLIX</h2>
    <App />
  </React.StrictMode>
);
