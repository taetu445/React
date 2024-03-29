import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter]=useState(15)

  const addValue=()=>{
    //counter=counter+1;
    console.log('clicked');
    if(counter==20){
      setCounter(counter);
    }else{
      setCounter(counter+1);
    }
    
  }
  const decreaseValue=()=>{
    //counter=counter+1;
    console.log('clicked');
    if(counter==0){
      setCounter(counter);
    }else{
      setCounter(counter-1);
    }
    
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>
      <button 
      onClick={addValue}>Add value</button>
      <br />
      <button
      onClick={decreaseValue}>Decrease value</button>
    </>
  )
}

export default App
