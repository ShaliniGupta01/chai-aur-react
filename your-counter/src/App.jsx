//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import { useState } from 'react';
import './App.css'

function App() {

  const [counter, setCounter] = useState(25)


  //let counter = 25

  const addValue = () => {
    console.log("clicked", counter);
  //counter = counter + 1
   setCounter((prevCounter) => prevCounter + 1)
   setCounter(prevCounter =>prevCounter + 1)
   setCounter( prevCounter => prevCounter + 1)
   setCounter(prevCounter => prevCounter + 1)
    //console.log("value added", Math.random());
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter value: {counter}</h2>

    <button
    onClick={addValue}
    >Add Value {counter}</button>
    <br/>
    <button
    onClick={removeValue}
    >Remove value {counter}</button>
    <p>Footer: {counter} </p>
    </>
  )
}

export default App
 