import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Home from './components/Home';
import Vehicles from './components/Vehicles';
import Starships from './components/Starships';
import Carddetails from './components/Carddetails';
import Search from './components/Search';


const App = () => {
  
  return (
    <>
    <Router>
      <Navbar />
        <Container>
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
         
        </Container>
    </Router>
      
    </>
  );
}

export default App;
