import React from "react";
import SavedPalletes from "./SavedPalletes";

function Pallettes() {
  return (
    <div>
      <div className="inputContainer">
        <h2 className="inputTitle">Name</h2>
        <div className="saveBar">
          <input
            type="text"
            placeholder="Website color scheme"
            className="inputText"
          />
          <input type="submit" value="+" className="inputSubmit" />
        </div>
      </div>
      <SavedPalletes />
    </div>
  );
}

export default Pallettes;
