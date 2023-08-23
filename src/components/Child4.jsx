import React, { useEffect, useState } from 'react'

function Child4({getChild4Value, getChild4Value1}) {
    const [state4, setState4] = useState('divyansh');
    useEffect(() => {
        getChild4Value(state4);
        getChild4Value1(state4);
    }, [])
  return (
    <div>Child4</div>
  )
}

export default Child4