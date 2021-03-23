// import './Filter.css'

const Filter = ({regions, setRegions}) => {

  const statusHandler = (e)=> {
    setRegions(e.target.value)
  }

  return (
    <>
    
    <select onChange={statusHandler} className="filter__wrapper">
        <option> All</option>
        <option> Africa</option>
        <option> Americas</option>
        <option> Europe</option>
        <option> Oceania</option>
      </select>
      
    </>
  );
};

export default Filter;
