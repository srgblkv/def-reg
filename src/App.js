import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./styles.css";

import Main from "./pages/Main";
import Sets from "./pages/Sets";

export default function App({ fb }) {
  const [partNumber, setPartNumber] = useState("");
  const [prevPartNumber, setPrevPartNumber] = useState("");

  const keyClick = (e) => {
    const { value } = e.target;
    switch (value) {
      case "RM":
        return setPartNumber("");
      case "DEL":
        return setPartNumber(
          [...partNumber].slice(0, partNumber.length - 1).join("")
        );
      default:
        if (partNumber.length < 4) {
          setPartNumber([...partNumber, value].join(""));
        }
    }
  };

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          {prevPartNumber ? `прошлая запись: ${prevPartNumber}` : ``}
          <Main partNumber={partNumber} keyClick={keyClick} />
        </Route>
        <Route path="/select-defect">
          <Sets
            fb={fb}
            setPartNumber={setPartNumber}
            partNumber={partNumber}
            setPrevPartNumber={setPrevPartNumber}
          />
        </Route>
      </Switch>
    </div>
  );
}
