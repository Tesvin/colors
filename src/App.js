import React, { useState } from 'react'
import ColorBlack from './ColorBlock'
import ColorForm from './ColorForm';
import './App.css';

function App() {
  let [colors, setColors] = useState(['violet', 'blue', 'lightblue', 'green', 'greenyellow', 'yellow', 'orange', 'red'])

let colorMap = colors.map((color, i) => {

  return (
      <ColorBlack key={i} color={color}/>
  );
})

const checkColor = (newColor) => {
  const cool = new Option().style;
  cool.color = newColor
  return cool.color !== ""
}

const addColor = (newColor) => {
  if(checkColor(newColor)){
  setColors([...colors, newColor])
}
}

return (
  <div className='App'>
    <ColorForm addColor={addColor}/>
    <div className='colorCards'>
    {colorMap}
    </div>
  </div>
)
}

export default App;
