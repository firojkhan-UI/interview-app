import React, { useEffect, useState } from 'react'
import LinearProgressBar from './LinearProgressBar';

export default function CounterApp() {
    const [count, setCount] = useState(0)
    const [isTrue, setTrue] = useState(false)
    let timer;

    const handleCount = () => {
        setTrue(!isTrue)
        setCount( count+1 )
    }

    useEffect(() => {
       if(count) {
        timer = setTimeout (() => {
            handleCount()
    },1000)
       }
    },[count])

    const handleStop = () => {
        clearInterval(timer)
    }

    const handleReset = () => {
        clearInterval(timer)
        setCount(0)
    }

  return (
    <> 
    <div>CounterApp: {count}</div>
    <button onClick={handleCount}>start</button>
    <button onClick={handleStop}>stop</button>
    <button onClick={handleReset}>reset</button>
    </>
   
  )
}
