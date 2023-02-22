import React from 'react'
import { CompactPicker } from 'react-color';

// class Component extends React.Component {

//   render() {
//     return <CompactPicker />;
//   }
// }

function Colors() {
  return (

<div>

    <div className='rawCercleContainer' >
       <button className='rawCercle'><p className='addCross'>+</p></button>
       <button className='rawCercle'><p className='addCross'>+</p></button>
       <button className='rawCercle'><p className='addCross'>+</p></button>
       <button className='rawCercle'><p className='addCross'>+</p></button>
       <button className='rawCercle'><p className='addCross'>+</p></button>
    </div>

    <div className='compactPicker'><CompactPicker/></div>
    

</div>
  )
}

export default Colors