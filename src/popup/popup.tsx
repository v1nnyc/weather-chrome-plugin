import * as React from "react";
import { render } from "react-dom";
import "./popup.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <img src="icon.png"></img>
        <h1>popup page!</h1>
      </div>
    );
  }
}

const root = document.createElement("div");
document.body.appendChild(root);
render(<App />, root);
