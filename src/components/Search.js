import React, {useState} from 'react';
import { Image, Card, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Search = ({data, card}) => {
    const [results, setResults] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    async function handleSubmit(e){
        const res = await fetch(`https://swapi.dev/api/${card}/?search=${searchValue}`);
        const data = await res.json();
        setResults([...data.results]);
    }
    const test = results && results.length>0 ? results : data;
   
      function getId(url) {
        return url.split('/')[url.split('/').length - 2]
      }
      return(
    <div>
        <Card>
        <input
        type="text"
        placeholder="Search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button type="submit" onClick={handleSubmit}>Search</button>
        </Card>
        <Grid columns={3}>
                {test.map((vehicle, i) => {
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
            </Grid>
    </div>
)};

export default Search;