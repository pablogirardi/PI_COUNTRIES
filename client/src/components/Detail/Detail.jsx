import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"

const DetailCountry = () => {
    const [countryDetail, setCountry] = useState({});
    const id = useParams().id;

    useEffect(() => {
        axios(`http://localhost:3001/countries/${id}`)
        .then(({data}) => {
            if (data.name) {
                setCountry(data);
            } else {
                window.alert("Country not found ")
            }
        })
        return setCountry
    }, [id]);
    
    return (
        <div>
            <img className="detailImg" src={`${countryDetail.flagImg}`}/>
            <h2>{countryDetail?.name}</h2>
            <h2>{countryDetail?.continents}</h2>
            <h2>{countryDetail?.capital}</h2>
            <h2>{countryDetail?.area}</h2>
            <h2>{countryDetail?.population}</h2>
        </div>
    )
}
export default DetailCountry