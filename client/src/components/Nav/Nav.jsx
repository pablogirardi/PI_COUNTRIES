import { Link } from "react-router-dom";
import style from "./Nav.module.css";
import { useSelector } from "react-redux";
import SearchBar from "../SearchBar/Searchbar";

export default function Nav() {
  const allCountries = useSelector((state) => state.countriesCopy);

  const handleClickCountries = () => {
    return allCountries;
  };

  return (
    <div className={style.header}>
      <div className={style.headerContainer}>
        <SearchBar />
        <Link to="/">
          <button>Home</button>
        </Link>

        <Link to="/home">
          <button onClick={handleClickCountries()}>All countries</button>
        </Link>

        <Link to="/form">
          <button>Create new activity</button>
        </Link>
      </div>
    </div>
  );
}
