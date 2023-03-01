import React from "react";
import { ReactComponent as IconPapelera } from "../Icon_papelera.svg";

const SavedPalletes = (props) => {
  

  return (
    <div className="mainNewPalletesContainer">
    <div className="newPalletesContainer">
    <h2 className="inputTitle2">Saved palletes</h2>
    <div>
      <div className="inputSubTitle">
      <h3  className="addedSubtitle">{props.text}</h3>
      <button className="removeIcon"><IconPapelera/></button>
      </div>
      <div className="CercleContainer">
        <button className="cercle cercle1"></button>
        <button className="cercle cercle2"></button>
        <button className="cercle cercle3"></button>
        <button className="cercle cercle4"></button>
        <button className="cercle cercle5"></button>
        </div>
    </div>
    </div>
    </div>
  );
}

export default SavedPalletes;
