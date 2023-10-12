import { Link, useNavigate } from "react-router-dom";
import React from "react";
import style from "./Card.module.css";

function Card({ country }) {
  // const Navigate = useNavigate();
  const { id, name, continent, flagImg } = country;
  //   const handlerToDetail = (id) => {
  //     Navigate(`/countries/${id}`);
  //   };
  return (
    <div className={style.card}>
      <h3>{name}</h3>
      <div className={style.flagContainer}>
        <Link to={`/countries/${id}`}>
          <img className="flag " src={`${flagImg}`} alt="" />
        </Link>
      </div>
      <h3>{continent}</h3>
    </div>
  );
}

export default Card;
