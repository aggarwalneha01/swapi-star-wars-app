import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Loader, Dimmer } from 'semantic-ui-react';
import Home from './components/Home';
import Vehicles from './components/Vehicles';
import Starships from './components/Starships';
import Carddetails from './components/Carddetails';
import Search from './components/Search';


const App = () => {
  // const [vehicles, setVehicles] = useState([]);
  // const [starships, setStarships] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   async function fetchVehicles(){
  //     let res = await fetch('https://swapi.dev/api/vehicles');
  //     let data = await res.json();
  //     setVehicles(data.results);
  //     setLoading(false);  
  //     // console.log(vehicles);
  //   }

  //   async function fetchStarships(){
  //     let res = await fetch('https://swapi.dev/api/starships');
  //     let data = await res.json();
  //     setStarships(data.results); 
  //     setLoading(false); 
  //     // console.log(starships); 
  //   }

  //   fetchVehicles();
  //   fetchStarships();

  // }, [])
  return (
    <>
    <Router>
      <Navbar />
      {/* <Search /> */}
        <Container>
          {/* {loading ? ( */}
          {/* <Dimmer active inverted>
            <Loader inverted>Loading</Loader>
          </Dimmer> */}
          {/* ) : ( */}
             <Switch>
             <Route exact path='/'>
               <Home />
             </Route>
             <Route exact path='/vehicles'>
               <Vehicles />
             </Route>
             <Route exact path='/starships'>
               <Starships />
             </Route>
             <Route exact path='/carddetails'>
               <Carddetails />
             </Route>
             <Route exact path='/search'>
               <Search />
             </Route>
           </Switch>
          {/* )} */}
         
        </Container>
    </Router>
      
    </>
  );
}

export default App;
