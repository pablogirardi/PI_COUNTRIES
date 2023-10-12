import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchByName } from "../../redux/actions";
import style from "./SearchBar.module.css";

export default function SearchBar({}) {
  const dispatch = useDispatch();
  const [countryName, setCountryName] = useState("");

  function changeHandler(event) {
    event.preventDefault();
    setCountryName(event.target.value);
  }

  function dispatchHandler() {
    dispatch(searchByName(countryName));
  }

  return (
    <div className={style.searchBar}>
      <input
        className={style.bar}
        type="search"
        name="searchBar"
        onChange={changeHandler}
        value={countryName}
      />
      <button className={style.button} onClick={dispatchHandler}>
        Search
      </button>
    </div>
  );
}
