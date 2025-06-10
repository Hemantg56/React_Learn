import './App.css'
import { useState } from 'react';

function App() {
  // let counter = 5;
  let [counter, setCounter] = useState(5)
  const addCounter = () => {
    // counter = counter + 1;
    // setCounter(counter + 1)?
    // console.log(counter, 'clicked');
    // if (counter == 20) {
    //   setCounter(20)
    // } else {
    //   setCounter(counter + 1);
    // }
    if(counter >= 20) {
      return;
    }
    setCounter(counter + 1)
  }
  

  const removeCounter = () => {
    if (counter <= 0) {
      return;
    }
    setCounter(counter - 1)
  }
  return (
    <>
      <h1>Hello World</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addCounter}>Add Value</button>
      <button onClick={removeCounter}>Remove Value</button>
    </>
  )
}

export default App;
