import Search from "../Search/Search";
import Filter from "../Filter/Filter";
const Menu = ({filteredData, setFilteredData, regions, setRegions, numberOfCountries}) => {
  return (
    <>
      <div className="menu__wrapper">
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
