// useMemo , React.memo, useCallback => optimization =


import { useCallback, useEffect, useMemo, useState } from "react"

// useCallback() => cache => 

// 1 + 2 => 3

// useEffect(() => {}, [])

// useCallback(() => {}, []) => whole function cache 
// useMemo(() => {}, []); => cache single value 


import React from 'react'

function useMemoHook() {
    const [n1, setN1] = useState(1);
    const [n2, setN2] = useState(2);

    const sumvlaue = (n1,n2) => {
        return (n1+n2);
    }

    const value = useMemo(() => {
       return n1+n2; 
    }, [n1, n2]);

    const valuefromcallback = useCallback(() => {
        return sumvlaue(3,4)
    }, [n1,n2]);
  return (
    <>
    <div>useMemoHook</div>
    {value}
    {valuefromcallback()}
    </>

  )
}



export default useMemoHook
// export default React.memo(Component)
