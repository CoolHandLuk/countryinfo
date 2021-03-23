import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const CountryList = ({
  colorChange, setColorChange, filteredData, handleNumberOfCountries,numberOfCountries, setNumberOfCountries, regions, setRegions })=>{
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    axios.get(`https://restcountries.eu/rest/v2/all`).then((res) => {
      const responseCountries = res.data;
      setCountries(responseCountries);
    });
  },[]);

  /*  warunek do selecta */
 const filteredRegions = regions ==='All' ? countries : countries.filter((country)=>{
   return country.region === regions ;
 })

 /* warunek do filtra search */
  const filteredCountries = filteredData ? filteredRegions.filter((country)=>{
    return country.name.toLowerCase().includes(filteredData)}) : filteredRegions;
  

    setNumberOfCountries(countries.length);


  return (
    <>
      <div className="countries__wrapper">
        {filteredCountries && 
          filteredCountries.map((country) => {
            const {
              numericCode,
              name,
              population,
              region,
              capital,
              flag
            } = country;
            return (
              <>
                
                <div className="countries__entry"  key={numericCode}>
                    <Link to={`/country/${name}`}>
                        <img className="countries__img" src={flag} alt={name} />
                    </Link>
                  <h3 className="countries__name">
                    {name} 
                  </h3>
                  <h3 className="countries__description">
                    Population: {population}
                  </h3>
                  <h3 className="countries__description">Region: {region} </h3>
                  <h3 className="countries__description">Capital: {capital}</h3>

                </div>
              </>
            );
          })}
      </div>
    </>
  )
}

export default CountryList;

