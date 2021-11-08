import React, {useState} from 'react';
import { Image, Card, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

const Search = ({data, card}) => {
    const [results, setResults] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [priceValue, setPriceValue] = useState(0);    

    async function handleSubmit(e){
        const res = await fetch(`https://swapi.dev/api/${card}/?search=${searchValue}`);
        const data = await res.json();
        if(priceValue > 0) {
            const filteredResults = data.results.filter(n => n.cost_in_credits < priceValue);
            setResults([...filteredResults]);
        } else {
            setResults([...data.results]);
        }
    }
    const test = results && results.length>0 ? results : data;
   
      function getId(url) {
        return url.split('/')[url.split('/').length - 2]
      }

      function formatSliderValue(val) {
          return val/1000;
      }
      
      function handleChange(value) {
          setPriceValue(value);
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
      <label>Cost In Credit (in thousands)</label>
      <Slider
          min={0}
          max={300000}
          step={1000}
          value={priceValue}
          format={formatSliderValue}
          onChange={handleChange}
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
                                        <strong>Price</strong>
                                        <p>{vehicle.cost_in_credits}</p>
                                        <Link to={`/Carddetails?id=${getId(vehicle.url)}&card=${card}`} >More details</Link>
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