import React from 'react';
import {useState} from 'react';
import '../styles/App.css';
const App = () => {
const [selectedShape, setSelectedShape] = useState('square');
  const [shapes, setShapes] = useState([]);

  const handleShapeChange = (event) => {
    setSelectedShape(event.target.value);
  };

  const handleAddShape = () => {
    const newShape = selectedShape === 'square' ? (
      <div className="square">Square</div>
    ) : (
      <div className="circle">Circle</div>
    );

    setShapes([...shapes, newShape]);
  };

  return (
    <div>
      <div id="shape-creator">
        <select value={selectedShape} onChange={handleShapeChange}>
          <option value="square">Square</option>
          <option value="circle">Circle</option>
        </select>
        <button onClick={handleAddShape}>Add shape</button>
      </div>
      <div id="shapes-holder">{shapes}</div>
    </div>
  );
}


export default App;
