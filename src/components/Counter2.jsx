import React from 'react'
import HocComponent from './Hoc'

const Counter2 = ({count, increment}) => {
  return (
    <>
    <div> counter 2 - {count}</div>
    <button type='button' onClick={increment}> ++ </button>
    </>
  )
}

export default HocComponent(Counter2)