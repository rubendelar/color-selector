import React, {  useState } from "react";
import SavedPalletes from "./SavedPalletes";


const Pallettes = () => {

  // function addPalleteElements() {

  //   const newPalletesDiv = document.createElement('div');
  //   const inputTitle2 = document.createElement('h2');
  //   inputTitle2.classList.add('inputSubTitle');
  //   inputTitle2.appendChild(newPalletesDiv);
  //   const inputContainer = document.createElement('div');
  //   inputContainer.appendChild(newPalletesDiv);
  //   const inputSubTitle = document.createElement('div');
  //   inputSubTitle.classList.add('inputSubTitle');
  //   inputSubTitle.appendChild(inputContainer);
  //   const addedSubtitle = document.createElement('h3');
  //   addedSubtitle.classList.add('addedSubtitle');
  //   addedSubtitle.appendChild(inputSubTitle);
  //   //newPallete.appendDiv(appendDiv);
  // }

    const [palleteName, setPalleteName] = useState('');

    const handleSubmit = (e) => {
         if (palleteName!==('')) {
          e.preventDefault();
          //addPalleteElements();
         } else alert('Please give a pallets name')
    }

  return (
    <div>
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
      <SavedPalletes text={palleteName} />
    </div>
  );
}
export default Pallettes;
