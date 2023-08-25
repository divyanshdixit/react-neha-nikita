import React from 'react'
import HocComponent from './Hoc'

const Counter1 = ({count, increment, children}) => {
  return (
    <>
        <div>Counter1- {count}</div>
        {children}
        <button type='button' onClick={increment}> + </button>
    </>
  )
}

export default HocComponent(Counter1)