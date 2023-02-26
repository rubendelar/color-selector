import React, { useState, useEffect } from "react";
import { CompactPicker } from "react-color";
import Pallettes from "./Pallettes";



// class Component extends React.Component {

//   render() {
//     return <CompactPicker />;
//   }
// }

function Colors() {

  useEffect(() => {
    const color = getComputedStyle(document.documentElement).getPropertyValue('--cercle-background')
    console.log(color);
  }, []);

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
  
 
  return (
    <div>
      <div className="rawCercleContainer">
        <button className="rawCercle rawCercle1" onClick={changeCercle1}>+</button>
        <button className="rawCercle rawCercle2" onClick={changeCercle2}>+</button>
        <button className="rawCercle rawCercle3" onClick={changeCercle3}>+</button>
        <button className="rawCercle rawCercle4" onClick={changeCercle4}>+</button>
        <button className="rawCercle rawCercle5" onClick={changeCercle5}>+</button>
      </div>

      <div className="compactPicker">
        <CompactPicker color={color} onChange={handleColorChange}  />
      </div>

      <Pallettes />
    </div>
  );
}

export default Colors
