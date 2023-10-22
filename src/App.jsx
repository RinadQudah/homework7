 
import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'
function App() {
  const [counter,setNum]=useState(0)
  const changeData =()=>{
    setNum(counter+1)
  }
  const decrease=()=>{
    setNum(counter-1)
  }
  const reset=()=>{
    setNum(0)
  }
    return (
    <>
    <button onClick={changeData}>increase</button>
    <button onClick={decrease}>decrease</button>
    <button onClick={reset}>reset</button>
    <span>{counter}</span>
    </>
  )
}

export default App
