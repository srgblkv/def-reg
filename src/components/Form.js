import React from "react";

import "./Form.css";

const keysValues = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "DEL",
  "0",
  "RM"
];

const Key = ({ value, keyClick }) => {
  return (
    <div className="key">
      <button onClick={keyClick} value={value}>
        {value}
      </button>
    </div>
  );
};

const KeyBoard = ({ keyClick }) =>
  keysValues.map((value, index) => {
    return <Key key={index} value={value} keyClick={keyClick} />;
  });

const Form = ({ partNumber, keyClick }) => {
  return (
    <div>
      <div className="input-partNumber">
        <span>№:</span>
        <input type="text" readOnly value={partNumber ? partNumber : "----"} />
      </div>
      <div className="input-key">
        <KeyBoard keyClick={keyClick} />
      </div>
    </div>
  );
};

export default Form;
