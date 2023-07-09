// add.jsx
// substruct.jsx
import React from 'react'
import Add from './Add'
import Substract from './Substract'
import Multiply from './Multiply'
import Division from './Division'

const Calculator = ({n1,n2, getValueFromChild, getValueFromAdd}) => { // parent
    const n3 = 40;
    getValueFromChild(n3);
  return (
    <div>
        <Add x={n1} y={n2} getValueFromAdd={getValueFromAdd}/> 
        <Substract x={n1} y={n2}/>
        <Multiply x={n1} y={n2}/>
        <Division x={n1} y={n2}/>
    </div>
  )
}

export default Calculator