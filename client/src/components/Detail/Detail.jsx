import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { detailCountries } from "../../redux/actions";

const DetailCountry = () => {
  const dispatch = useDispatch();
  // const [countryDetail, setCountry] = useState({});
  const country = useSelector((state) => state.detailCountries);
  const id = useParams().id;
  console.log(id);
  useEffect(() => {
    dispatch(detailCountries(id));
    // axios(`http://localhost:3001/countries/${id}`).then(({ data }) => {
    //   if (data.name) {
    //     setCountry(data);
    //   } else {
    //     window.alert("Country not found ");
    //   }
    // });
    //return setCountry;
  }, [dispatch, id]);
  // console.log(country.success);
  // useEffect(() => {
  //   console.log(country);
  // });
  if (country) {
    return (
      <div>
        <img className="detailImg" src={`${country.success.flagImg}`} />
        <h2>{country.success.name}</h2>
        <h2>{country.success.continents}</h2>
        <h2>{country.success.capital}</h2>
        <h2>Area: {country.success.area}</h2>
        <h2>Population: {country.success.population}</h2>
      </div>
    );
  }
};
export default DetailCountry;
