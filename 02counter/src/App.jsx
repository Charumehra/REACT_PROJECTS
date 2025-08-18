import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const stopCount = () => {
    setCount(count)
  }

  const addValue = () => {
    setCount(count + 1)
    if (count === 10) {
      alert('You have reached the limit')
      stopCount()
    }
  }
  const removeValue = () => {
    setCount(count - 1)
    if (count === 0) {
      alert('You have reached the limit')
      stopCount()
    }
  }

  return (
    <>
    <h1>Chai aur React</h1>
    <h2>value:{count}</h2>
    <button onClick={addValue}>Add value 
      </button><br /><br />
    <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
