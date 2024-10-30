import { useState } from 'react'
import './App.css'


function App() {

  let [counter,setCounter] = useState(0)

  //let counter = 7

  let increase =() => {
    //counter=counter+1
    setCounter(counter+1)

    console.log('increased',counter+1);

  }

  let decrease = () => {
    if (counter===0) {
      setCounter(counter)
    }
    else{
      setCounter(counter-1)
    }
    //counter=counter-1
  
    console.log('decreased',counter-1);

  }
  let setValue = () => {

  }

  return (
    <>
      <h1>Counter</h1>
      <h2>counter value: {counter}</h2>

      <button  onClick={increase}>increase</button>
      <button onClick={setValue} >{counter}</button>
      <button onClick={decrease}>decrease</button>

    </>
  )
}

export default App
