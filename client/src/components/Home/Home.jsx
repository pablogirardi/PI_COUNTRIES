import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../Cards/Cards";
import { getCountries } from "../../redux/actions";
import style from "./Home.module.css";
import SearchBar from "../SearchBar/Searchbar";

const Home = () => {
  const dispatch = useDispatch();

  const countries = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <div className={style.homeContainer}>
      <SearchBar />
      <div>
        <Cards countries={countries} />
      </div>
    </div>
  );
};

export default Home;
