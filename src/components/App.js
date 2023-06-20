import React from 'react'
import '../styles/App.css';
const App = () => {

  return (
    <div id="main">
      <div id="shape-creator">
        <select onChange={handleShapes}>
              <option>Square</option>
              <option>Circle</option>
        </select>
    <button className={button}>Add shape</button>

      </div>
      <div id="shapes-holder">
      </div>
    </div>
  )
}


export default App;
