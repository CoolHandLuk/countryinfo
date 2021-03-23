import './main.scss'
import Heading from "./Components/Heading/Heading";
import Menu from "./Components/Menu/Menu";
import CountryList from "./Components/CountryList/CountryList"
import Country from "./Components/Country/Country";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {useState} from 'react';


function App() {

  /* number of countries */
  const [numberOfCountries, setNumberOfCountries] = useState();

  /* zmienna do koloru */
  const [isLightMode, setIsLightMode] = useState(true);
  

  /* zmienna do searcha */
  const [filteredData, setFilteredData] = useState();
  
  /* zmienna do regionów */
const [regions, setRegions] = useState('All')

// const [filteredCountries, setFilteredCountries] = useState([]);
// const regionsHandler =()=> {
//   switch(regions){
//     case 'Africa':
//       setFilteredCountries()
//   }
// }
  return (
    <div className={isLightMode ? "app lightmode" : "app"} >
              
              <Router>
              <Heading
                    isLightMode={isLightMode}
                    setIsLightMode={setIsLightMode}
                  />
              <Switch>
                <Route path="/country/:name">
                  <Country />
                </Route>
                <Route exact path="/">
                  
                  <Menu
                  filteredData={filteredData}
                  setFilteredData={setFilteredData}
                  regions={regions}
                  setRegions={setRegions}
                  numberOfCountries={numberOfCountries}
                 
                 
                  />
                  <CountryList 
                   filteredData={filteredData}
                   numberOfCountries={numberOfCountries}
                   setNumberOfCountries={setNumberOfCountries}
                   regions={regions}
                   setRegions={setRegions}
                  />
                 
                  

                    
                    
                </Route>
              </Switch>
            </Router>
      
    </div>
  );
}

export default App;
