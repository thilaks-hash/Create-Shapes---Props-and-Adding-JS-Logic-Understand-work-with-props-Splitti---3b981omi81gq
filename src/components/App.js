import React from 'react';
import {useState} from 'react';
import '../styles/App.css';
const App = () => {
  const[square,setIsSquare]=useState(true);
 const[shapes,setShapes]=useState([]);
  const Toggle=()=>{
    if(square==="Square"){
    setShapes([...shapes,<div key={shapes.length}className="square">Square</div>])
    }else if(circle==="Circle"){
    setShapes([...shapes,<div key={shapes.length}className="circle">Circle</div>])
  }
  
  return (
    <div id="main">
      <div id="shape-creator">
        <select value={square} onChange={(e)=>setIsSquare(e.target.value)}>
              <option value="Square">Square</option>
              <option value="Circle">Circle</option>
        </select>
    <button className={square?"Square":"Circle"}onClick={Toggle}>Add shape</button>

      </div>
      <div id="shapes-holder">{shapes}
      </div>
    </div>
  )
}


export default App;
