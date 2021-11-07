import React, {useState, useEffect} from 'react';
import Search from './Search';

const Starships = () => {
    const [starships, setStarships] = useState([]);
    useEffect(() => {
        async function fetchStarships(){
          let res = await fetch('https://swapi.dev/api/starships');
          let data = await res.json();
          setStarships(data.results);
        }
        fetchStarships(); 
      }, [])
    return (
        <>
            <h1>Starships</h1>
            <Search card='starships' data={starships}/>
        </>
    )
}

export default Starships;
