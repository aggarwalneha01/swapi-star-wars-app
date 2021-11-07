import React, {useState, useEffect} from 'react';
// import { Image, Card, Grid } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';
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
    // function getId(url) {
    //     return url.split('/')[url.split('/').length - 2]
    //   }
    return (
        <>
            <h1>Vehicles</h1>
            <Search card='vehicles' data={vehicles}/>
            {/* <Grid columns={3}>
                {data.map((vehicle, i) => {
                    return(
                        <Grid.Column key={i}>
                            <Card>
                            <Image src='https://media.dondinojuguetes.es/product/vehiculos-e9-star-wars-800x800.jpg' size='medium' />
                                <Card.Content>
                                    <Card.Header>{vehicle.name}</Card.Header>
                                    <Card.Description>
                                        <strong>Model</strong>
                                        <p>{vehicle.model}</p>
                                        <Link to={`/Carddetails?id=${getId(vehicle.url)}&card=vehicles`} >More details</Link>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    )
                })}
            </Grid> */}
        </>
    )
}

export default Vehicles;
