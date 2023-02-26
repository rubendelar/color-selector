import React from "react";
import { ReactComponent as IconPapelera } from "../Icon_papelera.svg";

function SavedPalletes() {
  return (
    <div className="newPalletesContainer">
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
    </div>
  );
}

export default SavedPalletes;
