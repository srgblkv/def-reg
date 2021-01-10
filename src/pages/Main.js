import React from "react";
import { Link } from "react-router-dom";

import Form from "../components/Form";

const Main = ({ partNumber, keyClick }) => {
  return (
    <>
      <Form partNumber={partNumber} keyClick={keyClick} />
      <Link to="/select-defect">
        <button disabled={!partNumber}>Далее</button>
      </Link>
    </>
  );
};

export default Main;
