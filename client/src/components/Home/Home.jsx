import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../Cards/Cards";
import { getCountries } from "../../redux/actions";
import style from "./Home.module.css";
import SearchBar from "../SearchBar/Searchbar";
//import Card from "../Card/Card";
import Paginated from "../Paginated/Paginated";
import ReactPaginate from "react-paginate";

const Home = () => {
  const dispatch = useDispatch();

  const countries = useSelector((state) => state.countries);
  //const activity = useSelector((state) => state.acitivtyType);

  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(6);

  const max = Math.ceil(countries.length / perPage);

  const [input, setInput] = useState(1);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(activityType());
  // }, [dispatch]);

  if (countries.success) {
    return (
      <div className={style.homeContainer}>
        <Cards
          countries={countries}
          setPage={setPage}
          perPage={perPage}
          max={max}
        />
        {countries.length !== 1 ? (
          <Paginated
            page={page}
            setPage={setPage}
            max={max}
            input={input}
            setInput={setInput}
          />
        ) : null}

        {/* {console.log(countries)}
         {console.log("home")}  */}
      </div>
    );
  }
  // console.log(countries.success);
};

export default Home;
