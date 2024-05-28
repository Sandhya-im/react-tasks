import React from "react";
import ReactDOM from "react-dom/client";
import AddProducts from "./AddProducts";
import DisplayProducts from "./DisplayProducts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DisplayProducts />
    <AddProducts />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
