import React, {useState, useEffect} from 'react';
import Search from './Search';

const Vehicles = () => {
    const [vehicles, setVehicles] = useState([]);
    useEffect(() => {
        async function fetchVehicles(){
          let res = await fetch('https://swapi.dev/api/vehicles');
          let data = await res.json();
          setVehicles(data.results);
        }
  
        fetchVehicles(); 
      }, [])
    return (
        <>
            <h1>Vehicles</h1>
            <Search card='vehicles' data={vehicles}/>
        </>
    )
}

export default Vehicles;
