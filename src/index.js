import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ScrollToTop from "./utils/scrollToTop";
import axios from "axios";
// import i18n (needs to be bundled ;)) 
import './i18n';
import { Suspense } from 'react';

axios.defaults.baseURL = "https://backend-benz.vercel.app";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback={(<div>Loading</div>)} >
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
