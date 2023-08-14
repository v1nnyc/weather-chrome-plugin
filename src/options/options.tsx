import * as React from "react";
import { render } from "react-dom";
import "./options.css";

class App extends React.Component {
  render() {
    return <h1>options page</h1>;
  }
}

const root = document.createElement("div");
document.body.appendChild(root);
render(<App />, root);
