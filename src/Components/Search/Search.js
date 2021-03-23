// import "./Search.css";
import {useState} from 'react';

const Search = ({filteredData, setFilteredData, numberOfCountries}) => {


const handlerChange = (e)=> {
  setFilteredData(e.target.value.toLowerCase())
}

  return (
    <form className="form__wrapper">
      <i class="fa fa-search form__icon"></i>
      <input className="form__input" placeholder={`Search details of ${numberOfCountries} countries`}  onChange={handlerChange}  />
      
    </form>
  );
};

export default Search;
