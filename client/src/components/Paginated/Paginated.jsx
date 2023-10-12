import React, { useEffect, useState } from "react";
//import { VscArrowRight } from "react-icons/vsc";
//import { VscArrowLeft } from "react-icons/vsc";
import style from "./Paginated.module.css";

const Paginated = ({ page, setPage, max, input, setInput }) => {
  const nextPage = () => {
    setInput(parseInt(input) + 1);
    setPage(parseInt(page) + 1);
  };

  const previousPage = () => {
    setInput(input - 1);
    setPage(page - 1);
  };

  const onKeyDown = (e) => {
    if (e.keyCode == 13) {
      setPage(parseInt(e.target.value));

      if (
        parseInt(e.target.value) < 1 ||
        parseInt(e.target.value) > max ||
        isNaN(parseInt(e.target.value))
      ) {
        setPage(1);
        setInput(1);
      } else {
        setPage(parseInt(e.target.value));
      }
    }
  };

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className={style.pagContainer}>
      <button
        disabled={page === 1 || page < 1}
        className={style.buttonLeft}
        onClick={previousPage}
      >
        {/* <VscArrowLeft size="50px" /> */}
      </button>

      <input
        className={style.inputPage}
        onChange={(e) => onChange(e)}
        onKeyDown={(e) => onKeyDown(e)}
        name="page"
        autoComplete="off"
        value={input}
      />

      <p> de {max}</p>

      <button
        disabled={page === max || page > max}
        className={style.buttonRight}
        onClick={nextPage}
      >
        {/* <VscArrowRight size="50px" /> */}
      </button>
    </div>
  );
};

export default Paginated;
