import { useState } from 'react'  // hook
import './App.css'

function App() {
  let [counter,setCounter] = useState(15)

   const addcounter=()=>{
    if(counter >= 20){
      setCounter(20)
    }
    // counter = counter + 1;  this does changes the counter but that change is not visible in ui thus we use hooks
    else{
      // What if we want to increase the count directly by 5 , condition is we cannot directly add 5 to counter => We can do it by calling the setCounter variable 5 times. Is it the correct solution ? =>No. If we call it 5 or 10 times does'nt matters it will only increment it by 1 since the useState sends the change in batch so it considers all the setCounter function as a single batch with the purpose of incrementing the value of counter by 1 .Thus it is not possible , then how can we ?Solution below =>
    setCounter((counter) => counter + 1);
    setCounter((counter) => counter + 1);
    setCounter((counter) => counter + 1);
    setCounter((counter) => counter + 1);
    setCounter((counter) => counter + 1);
    } 
   }

   const removecounter = ()=> {
    if(counter <= 0){
      setCounter(0);
    }
    // counter  = counter - 1;
    else{
    setCounter(counter - 1);
    }
   }
  return (
    <>
      <h1>Set Counter {counter}</h1>
      <br />
      <h3>Note: The counter can increment only till 20 and Decrement till 0 and not beyond</h3>
      <br />
      <button onClick={addcounter}>Increment counter {counter}</button>
      <br />
      <br />
      <button onClick={removecounter}>Decrement counter {counter}</button>
    </>
  )
}

export default App
