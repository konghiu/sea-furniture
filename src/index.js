import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { makeServer } from "./server";

// if (process.env.NODE_ENV === "development") {
//      makeServer({ environment: "development" });
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
