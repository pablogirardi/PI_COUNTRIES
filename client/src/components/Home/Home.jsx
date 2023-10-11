import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../Cards/Cards";
import { getCountries } from "../../redux/actions";
import style from "./Home.module.css";
import SearchBar from "../SearchBar/Searchbar";
import Card from "../Card/Card";

const Home = () => {
  const dispatch = useDispatch();

  const countries = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  if (countries.success) {
    return (
      <div className={style.homeContainer}>
        <SearchBar />
        <Cards countries={countries} />
        {console.log(countries)}
        {/* {console.log("home")} */}
      </div>
    );
  }
  // console.log(countries.success);
};

export default Home;
