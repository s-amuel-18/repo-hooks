import { useState } from "react"

export const useCounter = ( count = 0 ) => {
  const [counterState, setCounterState] = useState(count)

  const increment = () => {
    setCounterState( counterState + 1 )
  }

  const decrement = () => {
    setCounterState( counterState - 1 )
  }
  const recet = () => {
    setCounterState( count )
  }

  return {
    counterState,
    increment,
    decrement,
    recet
  }
}
