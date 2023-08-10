import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ScrollToTop from "./utils/scrollToTop";
import axios from "axios";
import styles from './index.css';
import './i18n';
import { Suspense } from 'react';
import gif from './load.gif';

axios.defaults.baseURL = "https://backend-benz.vercel.app";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback={(
    <div className="loading_container">
      <div className="loading_gif">
        <img src={gif} alt="" />
      </div>
    </div>)}
  >
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </Suspense>
);

reportWebVitals();
