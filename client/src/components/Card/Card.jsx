import { Link, useNavigate } from "react-router-dom";
import React from "react";

function Card({ country }) {
    const Navigate = useNavigate();


    const handlerToDetail = id => {
      Navigate(`/detail/${id}`);
    }
    return (
        <div className={style.card}>
            <Link to={handlerToDetail(id)}>
                <h3>{country.name}</h3>
            </Link>
            <img className="flag "src={`${country.flagImg}`} alt="" />
            <h3>Continent: {country.continent}</h3>
            

        </div>
    )
}

export default Card