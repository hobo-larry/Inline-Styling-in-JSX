import React from "react";
import ReactDOM from "react-dom";

const customStyling = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black",
  backgroundColor: "brown",
  cursor: "alias",
};

customStyling.color = "blue";

ReactDOM.render(
  <h1 style={customStyling}>Hello World!</h1>,
  document.getElementById("root")
);
