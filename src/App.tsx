import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Button'
import CustomButtonWidget1 from './CustomButtonWidget1'
import CustomButtonWidget2 from './CustomButtonWidget2'

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () =>{
    setCount(prevCount=> prevCount+1);
  }

  return (
    <>
       <Button label={`Click ${count} times`} onClick={handleClick}/>
       <CustomButtonWidget1/>
       <CustomButtonWidget2/>
    </>
  )
}

export default App
