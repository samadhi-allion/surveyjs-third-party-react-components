import { useState } from 'react'
import './App.css'
import Button from './Button'
import CustomButtonWidget from './CustomButtonWidget'
import CustomButtonElement from './CustomButtonElement'

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () =>{
    setCount(prevCount=> prevCount+1);
  }

  return (
    <>
       <Button label={`Click ${count} times`} onClick={handleClick}/>
       <CustomButtonWidget/>
       <CustomButtonElement/>
    </>
  )
}

export default App
