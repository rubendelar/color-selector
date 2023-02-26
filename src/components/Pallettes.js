import React, { useState } from "react";
import SavedPalletes from "./SavedPalletes";
import ReactDOM from "react-dom";

function Pallettes() {

 
    const [palleteName, setPalleteName] = useState('');
    const newPallete = (name) => {
      setPalleteName(name);
      console.log(palleteName);
    }
    




    // let newPalletesDiv = document.createElement('div');
    // let inputTitle2 = document.createElement('h2');
    // inputTitle2.classList.add('inputSubTitle');
    // inputTitle2.appendChild(newPalletesDiv);
    // let inputContainer = document.createElement('div');
    // inputContainer.appendChild(newPalletesDiv);
    // let inputSubTitle = document.createElement('div');
    // inputSubTitle.classList.add('inputSubTitle');
    // inputSubTitle.appendChild(inputContainer);
    // let addedSubtitle = document.createElement('h3');
    // addedSubtitle.classList.add('addedSubtitle');






    {/* <div className="newPalletesContainer">
  <h2 className="inputTitle2">Saved palletes</h2>
  <div>
    <div className="inputSubTitle">
    <h3 className="addedSubtitle">subtitle</h3>
    <button className="removeIcon"><IconPapelera/></button>
    </div>
    <div className="CercleContainer">
      <button className="Cercle"></button>
      <button className="Cercle"></button>
      <button className="Cercle"></button>
      <button className="Cercle"></button>
      <button className="Cercle"></button>
      </div>
  </div>
  </div> */}

// let newColorsPallete = `<div className="newPalletesContainer">
// <h2 className="inputTitle2">Saved palletes</h2>
// <div>
//   <div className="inputSubTitle">
//   <h3 className="addedSubtitle">${palleteName}</h3>
//   <button className="removeIcon"><IconPapelera/></button>
//   </div>
//   <div className="CercleContainer">
//     <button className="Cercle"></button>
//     <button className="Cercle"></button>
//     <button className="Cercle"></button>
//     <button className="Cercle"></button>
//     <button className="Cercle"></button>
//     </div>
// </div>
// </div>`





  
  return (
    <div>
      <div className="inputContainer">
        <h2 className="inputTitle1">Name</h2>
        <div className="saveBar">
          <input
            type="text"
            placeholder="Website color scheme"
            className="inputText"
          />
          <input type="submit" value="+" className="inputSubmit" onClick={newPallete} />
          

          
        </div>

      <div >



      </div>








      </div>
      <SavedPalletes />
    </div>
  );
}

export default Pallettes;
