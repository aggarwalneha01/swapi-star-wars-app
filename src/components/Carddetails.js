import React, {useState, useEffect} from 'react'
import { Item } from 'semantic-ui-react';

const Carddetails = () => {
    const [details, setDetails] = useState({});
    const id = (new URLSearchParams(window.location.search)).get("id");
    const card = (new URLSearchParams(window.location.search)).get("card");

  useEffect(() => {
    async function fetchDetails(){
        let res = await fetch(`https://swapi.dev/api/${card}/${id}`);
        let data = await res.json();
        setDetails(data); 
      }
      fetchDetails();
    },[id, card])
    return (
        <div>
        <Item.Group >
            <Item>
            <Item.Image src='https://media.dondinojuguetes.es/product/vehiculos-e9-star-wars-800x800.jpg' size='large' />
                <Item.Content>
                    <Item.Header>{details.name}</Item.Header>
                    <Item.Description>
                        <strong>Model</strong>  
                        <p>{details.model}</p>
                        <strong>Manufacturer</strong>  
                        <p>{details.manufacturer}</p>
                        <strong>Cost in credits</strong>  
                        <p>{details.cost_in_credits}</p>
                        <strong>Cargo Capacity</strong>  
                        <p>{details.cargo_capacity}</p>
                        <strong>Created</strong>  
                        <p>{details.created}</p>
                        <strong>Max Atmoshphering Speed</strong>
                        <p>{details.max_atmosphering_speed}</p>
                        <strong>Vehicle Class</strong>
                        <p>{details.vehicle_class}</p>
                        <strong>passengers</strong>
                        <p>{details.passengers}</p>
                        <strong>Length</strong>
                        <p>{details.length}</p>
                        <strong>Crew</strong>
                        <p>{details.crew}</p>
                    </Item.Description>
                </Item.Content>
            </Item>
        </Item.Group>
        </div>
    )
}

export default Carddetails;
