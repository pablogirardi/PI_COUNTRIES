import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchByName } from "../../redux/actions";

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
    <div>
      <input
        type="search"
        name="searchBar"
        onChange={changeHandler}
        value={countryName}
      />
      <button onClick={dispatchHandler}>Buscar</button>
    </div>
  );
}
