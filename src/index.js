import React from "react";
import ReactDOM from "react-dom";
import Application from "./Application";

import "./styles.css";

function App() {
  return <Application />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
