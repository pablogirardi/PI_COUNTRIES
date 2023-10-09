import Card from "../Card/Card";
import style from "./Cards.module.css";
import { useSelector } from "react-redux";
export default function Cards({}) {
  const countries = useSelector((state) => state.countries);
  if (!countries || !Array.isArray(countries)) {
    return null;
  }
  console.log(countries);
  return (
    <div className={style.cards}>
      {countries?.map((country) => (
        <Card
          key={country.id}
          id={country.id}
          name={country.name}
          flagImg={country.flagImg}
          continent={country.continent}
        />
      ))}
    </div>
  );
}
