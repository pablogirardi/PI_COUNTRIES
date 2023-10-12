import Card from "../Card/Card";
import style from "./Cards.module.css";
import { useSelector } from "react-redux";
export default function Cards({ countries }) {
  //const countries = useSelector((state) => state.countries);
  // if (!countries || !Array.isArray(countries)) {
  //   return null;
  // }
  const info = countries.success;
  // console.log(info[0].id);
  if (info.length > 0) {
    return (
      <div className={style.cards}>
        {info?.map((country, index) => (
          <Card key={index} country={country} />
        ))}
      </div>
    );
  }
}
