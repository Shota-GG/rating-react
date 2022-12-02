import './reset.css';
import './App.css';
import Card1 from './Card1';
import Card2 from './Card2';

import { useState } from 'react';
import React from 'react'


function App() {
  
  const[isClicked, setIsClicked] = useState(false)
  const [clicked , setClicked] = useState(false)
  const[rate, setRate] = useState(null)

  function click(num){
   setRate(num)
  }
  return (
    <body>
      {clicked ? <Card2 rate={rate} /> : <Card1  change={()=>setClicked(true)} click={click} isClicked={isClicked} rate={rate} />}
    </body>
    
  );
}

export default App;
