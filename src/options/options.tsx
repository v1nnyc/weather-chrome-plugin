import * as React from "react";
import { render } from "react-dom";
import "./options.css";

function App() {
  return <h1>options page</h1>;
}

const root = document.createElement("div");
document.body.appendChild(root);
render(<App />, root);
