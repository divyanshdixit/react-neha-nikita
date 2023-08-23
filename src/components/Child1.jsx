import React from "react";
import Child2 from "./Child2";

function Child1({getChild4Value, child2State}) {
  return (
    <>
      <div>Child1</div>
      <Child2 getChild4Value={getChild4Value} child2State={child2State}/>
    </>
  );
}

export default Child1;
