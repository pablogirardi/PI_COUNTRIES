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
    <Link to={`/countries/${id}`}>
      <div className={style.card}>
        <h3>{name}</h3>

        <img className="flag " src={`${flagImg}`} alt="" />
        <h3>{continent}</h3>
      </div>
    </Link>
  );
}

export default Card;
