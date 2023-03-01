import React, { useState} from "react";
import { CompactPicker } from "react-color";
import SavedPalletes from "./SavedPalletes";


function Colors() {

  const [displayColor, setDisplayColor] = useState(false);
  const [color, setColor] = useState();


  const handleColorChange = (newColor) => {
    setDisplayColor(true);
    setColor(newColor.hex);
    
  }

  const changeCercle1 = () => {
    if (displayColor === true) {
      document.documentElement.style.setProperty('--addcross-color1',"transparent");
      document.documentElement.style.setProperty('--cercle-background1',color);

      setDisplayColor(false);
    } 
  }
  const changeCercle2 = () => {
    if (displayColor === true) {
      document.documentElement.style.setProperty('--addcross-color2',"transparent")
      document.documentElement.style.setProperty('--cercle-background2',color);

      setDisplayColor(false);
    } 
  }
  const changeCercle3 = () => {
    if (displayColor === true) {
      document.documentElement.style.setProperty('--addcross-color3',"transparent")
      document.documentElement.style.setProperty('--cercle-background3',color);

      setDisplayColor(false);
    } 
  }
  const changeCercle4 = () => {
    if (displayColor === true) {
      document.documentElement.style.setProperty('--addcross-color4',"transparent")
      document.documentElement.style.setProperty('--cercle-background4',color);

      setDisplayColor(false);
    } 
  }
  const changeCercle5 = () => {
    if (displayColor === true) {
      document.documentElement.style.setProperty('--addcross-color5',"transparent")
      document.documentElement.style.setProperty('--cercle-background5',color);

      setDisplayColor(false);
    } 
  }

  const [palleteName, setPalleteName] = useState('');

  const handleSubmit = (e) => {
       if (palleteName!==('')) {
        e.preventDefault();
        //addPalleteElements();
       } else 
       e.preventDefault();
       alert('Please give a pallets name')
  }
  
 
  return (
    <div>
      <div className="rawCercleContainer">
        <button className="rawCercle rawCercle1" onClick={changeCercle1}>+</button>
        <button className="rawCercle rawCercle2" onClick={changeCercle2}>+</button>
        <button className="rawCercle rawCercle3" onClick={changeCercle3}>+</button>
        <button className="rawCercle rawCercle4" onClick={changeCercle4}>+</button>
        <button className="rawCercle rawCercle5" onClick={changeCercle5}>+</button>
      </div>

      <div className="bigContainer">
      <div className="compactPicker">
        <CompactPicker color={color} onChange={handleColorChange}  />
      </div>
      <div className="inputContainer">
        <h2 className="inputTitle1">Name</h2>
        <div>
        <form className="saveBar" onSubmit={handleSubmit}>
          <input 
            id="mainInput"
            onChange={(e) => setPalleteName(e.target.value)}
            value={palleteName}
            type="text"
            placeholder="Website color scheme"
            className="inputText"
          />
          <button type="submit" className="inputSubmit" >+</button>
        </form>       
        </div>
      </div>
      </div>
      <SavedPalletes text={palleteName} />
    </div>
  );
}

export default Colors
