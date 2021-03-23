import Search from "../Search/Search";
import {useContext, useState} from 'react';
import Filter from "../Filter/Filter";
import ThemeContext from '../../theme-context';
// import "./Menu.css";


const Menu = ({filteredData, setFilteredData, regions, setRegions, numberOfCountries}) => {
  const theme = useContext(ThemeContext)
  return (
    <>
      <div className="menu__wrapper">
      {/* <div style={theme}> */}
        <Search
        filteredData={filteredData}
        setFilteredData={setFilteredData}
        numberOfCountries={numberOfCountries}
         />
        <Filter
        regions={regions}
        setRegions={setRegions}
        />
              
      </div>
    </>
  );
};

export default Menu;
