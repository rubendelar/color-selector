import React from 'react'
import { ReactComponent as LogoSvg } from '../logo_palette.svg';

function navBar() {
  return (
    <div className="navbar">
        <div className="navText">
            <LogoSvg/>
            <div className='navTitle'>Color palette generator</div>
        </div>
    </div>
  )
}

export default navBar