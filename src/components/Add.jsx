import React from 'react'
import Substract from './Substract'

const Add = ({x,y, getValueFromAdd}) => {
    const z = 50;
    getValueFromAdd(z);
  return (
    <h1> The sum of {x} and {y} is {x+y} </h1>
  )
}

export default Add