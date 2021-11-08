import React, {useState, useEffect} from 'react';
import { Image, Card, Grid, Input, Label, Button, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';
import SearchBar from './SearchBar'

const Search = ({data, card}) => {
    const [results, setResults] = useState([]);
    // const [searchValue, setSearchValue] = useState("");
    const [favourites, setFavourites] = useState([]);
    // const [minPriceValue, setMinPriceValue] = useState(0); 
    // const [maxPriceValue, setMaxPriceValue] = useState(0); 
    
    const getArray = JSON.parse(localStorage.getItem('favourites') || '0');
    let favList=[{}];
    for (let i=0; i< getArray.length; i++){
        let x = getArray[i];
        favList[i] = JSON.parse(localStorage.getItem('favItem' + [x]) || '');
    };

    useEffect(() => {
       if(getArray !== 0){
           setFavourites([...getArray])
       }
    }, []);
       

    async function handleSubmit(minPriceValue, maxPriceValue, searchValue){
        const res = await fetch(`https://swapi.dev/api/${card}/?search=${searchValue}`);
        const data = await res.json();
        if(minPriceValue>maxPriceValue){
            alert("Min value should not be greater than Max value");
        }
        if(minPriceValue > 0) {
            const filteredResults = data.results.filter(n => (n.cost_in_credits > minPriceValue && n.cost_in_credits < maxPriceValue));
            setResults([...filteredResults]);
        } else {
            setResults([...data.results]);
        }
    }

    function addfav(vehicle, i){
        let array = favourites;
        let addArray = true;
        array.map((index, key ) => {
            if(index===i){
                array.splice(key, 1);
                addArray=false;
            }
        });
        if(addArray){
            array.push(i)
        }
        setFavourites([...array]);
        localStorage.setItem("favourites", JSON.stringify(favourites));
        let storage = localStorage.getItem('favItem' + (i) || '0')
        if(storage == null){
            localStorage.setItem(('favItem' + (i)), JSON.stringify(vehicle))
        }
        else{
            localStorage.removeItem('favItem' + (i));
        }
    }

    const test = results && results.length>0 ? results : data;
   
      function getId(url) {
       console.log(url);
        return url.split('/')[url.split('/').length - 2]
      }
      
    
      return(
    <div>
         
    <Grid centered columns={3}>
       <Grid.Column>
        <SearchBar handleSubmit={handleSubmit}/>
      </Grid.Column>
    </Grid>
        
        <Grid centered columns={3}>
                {test.map((vehicle, i) => {
                    return(
                        <Grid.Column key={i}>
                            <Card>{favourites.includes(i) ? (
                            <IoIosHeart
                                onClick={()=>addfav(vehicle, i)}
                                style={{color: 'red'}}/>
                            ) : (
                            <IoIosHeartEmpty
                                onClick={(e)=>addfav(vehicle, i)}
                                style={{color: 'red'}}/>
                            )

                            }
                            
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