/*

parent
child1
child2
child3
child4

*/

import React, { useEffect, useState } from "react";
import Child1 from "./Child1";

function Parent() {
    const [state, setState] = useState('');
    const getChild4Value = (value) => {
        console.log(value);
        setState(value);
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json().then(response => console.log(response)))
        .catch((err) => console.log(err))
    }, [])

  return (
    <>
      <div>Parent</div>
      <Child1 getChild4Value={getChild4Value} child2State={state}/>
    </>
  );
}

export default Parent;
