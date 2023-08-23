import React from 'react'
import Child4 from './Child4'

function Child3({getChild4Value, getChild4Value1}) {
  return (
    <>
    <div>Child3</div>
    <Child4 getChild4Value={getChild4Value} getChild4Value1={getChild4Value1}/>
    </>
  )
}

export default Child3