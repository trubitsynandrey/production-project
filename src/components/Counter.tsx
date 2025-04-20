import { useState } from 'react'
import classes from './Counter.module.scss'

export const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <button className={classes.lol} onClick={() => setCount(prev => prev + 1)}>+1</button>
      <div>{count}</div>
    </>
  )
}

