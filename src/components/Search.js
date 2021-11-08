import React, {useState, useEffect} from 'react';
import { Image, Card, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io';
// import Slider from 'react-input-range';
// import 'react-rangeslider/lib/index.css';

const Search = ({data, card}) => {
    localStorage.clear();
    const [results, setResults] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [favourites, setFavourites] = useState([]);
    // const titles = Object.keys(favList[0]);
    // console.log("test", titles);
    const getArray = JSON.parse(localStorage.getItem('favourites') || '0');
    let favList;
    console.log("array", localStorage.getItem(''));
    for (let i=0; i< getArray.length; i++){
        let x = getArray[i];
        favList[i] = JSON.parse(localStorage.getItem('favItem' + [x]) || '');
    };

    useEffect(() => {
       if(getArray !== 0){
           setFavourites([...getArray])
       }
    }, []);

    async function handleSubmit(e){
        e.preventDefault();
        const res = await fetch(`https://swapi.dev/api/${card}/?search=${searchValue}`);
        const data = await res.json();
        setResults([...data.results]);
    }

    function addfav(vehicle, i){
        let array = favourites;
        let addArray = true;
        array.map((item, key ) => {
            console.log("i", item);
            console.log("j------->", key);
        });

        array.map((item, key ) => {
            console.log("vehicle", vehicle);
            console.log("key------->", key);

            console.log("item------->", item);
            if(item === vehicle){
                array.splice(key, 1);
                addArray=false;
            }
        });
        if(addArray){
            array.push(i)
        }
        setFavourites([...array]);
        localStorage.setItem("favourites", JSON.stringify(favourites));
        console.log("dskfjdpdsfds", localStorage);
        let storage = localStorage.getItem('favItem' + (i) || '0')
        if(storage == null){
            console.log(" in if");
            localStorage.setItem(('favItem' + (i)), JSON.stringify(vehicle))
        }
        else{
            console.log(" in else");
            localStorage.removeItem('favItem' + (i));
        }
        console.log("fav", localStorage);
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
      <label><strong>Price</strong></label> 
      {/* <Slider  maxValue={20}
        minValue={0}
        value={10}
        onChange={()=>(alert('hi'))}
      /> */}
      <button type="submit" onClick={handleSubmit}>Search</button>
        </Card>
        <Grid columns={3}>
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