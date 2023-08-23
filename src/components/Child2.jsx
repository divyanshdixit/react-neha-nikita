import React from 'react'
import Child3 from './Child3'

function Child2({getChild4Value, child2State}) {
    console.log(child2State)
    const getChild4Value1 = (value) => {
        console.log(value);
    }

  return (
    <>
    <div>Child2</div>
    <Child3 getChild4Value={getChild4Value} getChild4Value1={getChild4Value1}/>
    </>
  )
}

export default Child2