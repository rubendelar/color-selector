import React from "react";
import { ReactComponent as LogoSvg } from "../logo_palette.svg";

function NavBar() {
  return (
    <div className="navbar">
      <div className="navText">
        <LogoSvg />
        <div className="navTitle">Color palette generator</div>
      </div>
    </div>
  );
}

export default NavBar;
