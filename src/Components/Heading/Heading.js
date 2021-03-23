// import "./Heading.css";
import {Link} from 'react-router-dom';
import {useContext, useState} from 'react';

const Heading = ({isLightMode, setIsLightMode}) => {


const changeColor = ()=> {
  setIsLightMode(!isLightMode)
}

  return (
    <>
      <div className="heading__wrapper"   >
        <Link style={{ textDecoration: 'none' }} to="/">
        <h2 className="heading__textleft">Where in the World?! </h2> 
        </Link>
        
        <h2 className="heading__textright" onClick={changeColor} >
          {isLightMode ? <i className="fas fa-moon heading__icon"></i> : <i class="fas fa-sun heading__icon"></i>  }
          
          
          {isLightMode ? "Dark Mode" : "Light Mode"} 
        </h2>
      </div>
    </>
  );
};

export default Heading;
