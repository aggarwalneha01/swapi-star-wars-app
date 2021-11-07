import React, {useState, useEffect} from 'react';
import { Image, Card, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
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
    // function getId(url) {
    //     return url.split('/')[url.split('/').length - 2]
    //   }
    return (
        <>
            <h1>Starships</h1>
            <Search card='starships' data={starships}/>
            {/* <Grid columns={3}>
                {data.map((starships, i) => {
                    return(
                        <Grid.Column key={i}>
                            <Card>
                            <Image src='https://cdn.motor1.com/images/mgl/xWZQ6/s1/porsche-star-wars-tri-wing-s-91x-pegasus-starfighter.jpg' size='medium' />
                                <Card.Content>
                                    <Card.Header>{starships.name}</Card.Header>
                                    <Card.Description>
                                        <strong>Model</strong>
                                        <p>{starships.model}</p>
                                        <Link to={`/Carddetails?id=${getId(starships.url)}&card=starships`} >More details</Link>
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

export default Starships;
