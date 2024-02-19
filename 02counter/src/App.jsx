import { useState } from 'react';

import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 52

  const addValue = () => {
    if (counter > 19) {
      setCounter(counter)
    } 
    else{
      setCounter(counter + 1)
    }
  }

  const removeValue = () => {
    if (counter < 1) {
      setCounter(counter)
    } 
    else{
      setCounter(counter - 1)
    }
  }


  return (
    <>
     <h1>Chai Aur React</h1>
     <h2>Counter value: {counter}</h2>

     <button onClick={addValue}>Add Value {counter}</button>
     <br />
     <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
