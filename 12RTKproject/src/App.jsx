import { useState } from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { increment, decrement,increaseByAmount,decrementByAmount,reset } from './features/counterSlice'

function App() {
const dispatch = useDispatch()
const count = useSelector((state)=>state.counter.value)
const [num, setnum] = useState(0)

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{dispatch(increment())}}  >increment</button>
      <button onClick={()=>{dispatch(decrement())}}>decrement</button>
      <input 
      type="number" 
      value={num}
      onChange={(e)=>{
        setnum(e.target.value)
        }}/>
      <button onClick={()=>{
        dispatch(increaseByAmount(Number(num)))
        }}>
        increase by Amount
      </button>
      <button onClick={()=>{dispatch(decrementByAmount(Number(num)))}} >decrease by Amount</button>
      <button onClick={()=>{dispatch(reset())}}>reset</button>
    </div>
  )
}

export default App