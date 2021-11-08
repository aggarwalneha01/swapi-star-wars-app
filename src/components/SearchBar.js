import React, {useState} from 'react';
import {  Input, Label, Button, Segment } from 'semantic-ui-react';
import Slider from 'react-rangeslider';

const SearchBar = ({handleSubmit})=>{
    const [minPriceValue, setMinPriceValue] = useState(0); 
    const [maxPriceValue, setMaxPriceValue] = useState(0);
    const [searchValue, setSearchValue] = useState("");

    function handleMinChange(value) {
        setMinPriceValue(value);
    }
    function handleMaxChange(value) {
      setMaxPriceValue(value);
  }

  function formatSliderValue(val) {
    return val/1000;
}
    return(
<Segment>
        <Label>Name, Model</Label>
        <Input
            type="text"
            placeholder="Search Name Model"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
        />
         <Label>Min Cost In Credit (in thousands)</Label>
        <Slider
            min={0}
            max={300000}
            step={1000}
            value={minPriceValue}
            format={formatSliderValue}
            onChange={handleMinChange}
        />
        <Label>Max Cost In Credit (in thousands)</Label>
        <Slider
            min={0}
            max={300000}
            step={1000}
            value={maxPriceValue}
            format={formatSliderValue}
            onChange={handleMaxChange}
        />
      <Button type="submit" onClick={()=>handleSubmit(minPriceValue, maxPriceValue, searchValue)}>Search</Button>
       </Segment>
    )}

    export default SearchBar;