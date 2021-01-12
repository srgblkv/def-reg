import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./style.css";

const Sets = ({ fb, partNumber, setPartNumber, setPrevPartNumber }) => {
  const [count, setCount] = useState(1);
  const [type, setType] = useState("");
  const [defect, setDefect] = useState("");
  const [form, setForm] = useState("");
  const [comment, setComment] = useState("");

  const addPart = (partNumber, type, defect, count, form) => {
    const date = new Date();

    // console.log({
    //   [date]: {
    //     partNumber,
    //     type,
    //     defect,
    //     form,
    //     count,
    //     comment: comment.split(' ')
    //   }
    // });

    fb.database()
      .ref("parts/" + date)
      .set({
        partNumber,
        type,
        defect,
        form,
        count,
        comment: comment.split(" ")
      });
  };

  const handleSubmit = () => {
    addPart(partNumber, type, defect, count, form, comment);
    setComment("");
    setPrevPartNumber(partNumber);
    setPartNumber("");
  };

  return (
    <div>
      <span className="title">№:{partNumber}</span>
      <fieldset>
        <legend>Материал</legend>
        <label htmlFor="type-65">
          <input
            onChange={(e) => {
              setType(e.target.value);
            }}
            type="radio"
            id="type-65"
            name="type"
            value="type-65"
          />
          65
        </label>
        <label htmlFor="type-80">
          80
          <input
            onChange={(e) => {
              setType(e.target.value);
            }}
            type="radio"
            id="type-80"
            name="type"
            value="type-80"
          />
        </label>
      </fieldset>
      <fieldset>
        <legend>Дефект</legend>
        <label htmlFor="defect-broken">
          <input
            onChange={(e) => {
              setDefect(e.target.value);
            }}
            type="radio"
            id="defect-broken"
            name="defect"
            value="defect-broken"
          />
          Брак
        </label>
        <label htmlFor="defect-fix">
          Ремонт
          <input
            onChange={(e) => {
              setDefect(e.target.value);
            }}
            type="radio"
            id="defect-fix"
            name="defect"
            value="defect-fix"
          />
        </label>
      </fieldset>

      <fieldset>
        <legend>Форма</legend>
        <label htmlFor="formType-sylkast">
          <input
            onChange={(e) => {
              setForm(e.target.value);
            }}
            type="radio"
            id="formType-sylkast"
            name="formType"
            value="formType-sylkast"
          />
          С
        </label>
        <label htmlFor="formType-springs">
          <input
            onChange={(e) => {
              setForm(e.target.value);
            }}
            type="radio"
            id="formType-springs"
            name="formType"
            value="formType-springs"
          />
          Р
        </label>
        <label htmlFor="formType-sixforms">
          <input
            onChange={(e) => {
              setForm(e.target.value);
            }}
            type="radio"
            id="formType-sixforms"
            name="formType"
            value="formType-sixforms"
          />
          Ш
        </label>
        <label htmlFor="formType-ptfe">
          <input
            onChange={(e) => {
              setForm(e.target.value);
            }}
            type="radio"
            id="formType-ptfe"
            name="formType"
            value="formType-ptfe"
          />
          Ф
        </label>
      </fieldset>

      <fieldset className="count">
        <legend>Количество</legend>
        <button
          onClick={() => {
            if (count > 0) {
              setCount(count - 1);
            }
          }}
        >
          -
        </button>
        <input type="number" value={count} readOnly />
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </fieldset>
      <fieldset>
        <legend>Комментарий</legend>
        <textarea
          onChange={(e) => {
            setComment(e.target.value);
          }}
          value={comment}
        >
          {" "}
        </textarea>
      </fieldset>

      <Link to="/">
        <button onClick={handleSubmit} disabled={!(type && defect && form)}>
          Записать
        </button>
      </Link>
    </div>
  );
};

export default Sets;
