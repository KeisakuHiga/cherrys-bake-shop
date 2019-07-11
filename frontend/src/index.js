import React from "react";
import ReactDOM from "react-dom";
import dotenv from "dotenv";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
dotenv.config();

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'))