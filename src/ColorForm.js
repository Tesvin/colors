import React, { useState } from 'react'
import ColorBlock from './ColorBlock';

function ColorForm(props) {
  let [input, setInput] = useState('')

  const hanldeSubmit = (e) => {
   e.preventDefault(); 
   e.target[0].value = "";
   props.addColor(input)
  }
  console.log(input);
  return (
    <div>
      <form  
        onSubmit={hanldeSubmit}
        >
        <input type="text"
          onChange={(e) => setInput(e.target.value)}
          placeholder="Change my color"
        />
        <button type='submit'>Submit</button> 
      </form>
    </div>
  )
}

export default ColorForm