import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";

function run() {
  ReactDOM.render(<App />, document.getElementById("root"));
}

const loadedStates: any = ["complete", "loaded", "interactive"];

if (loadedStates.includes(document.readyState) && document.body) {
  run();
} else {
  window.addEventListener("DOMContentLoaded", run, false);
}
