// hoc => higher order components 

// 3 components 
// => ek logic (addition )
// common => function.js => addition

// Hoc.jsx => addition
// hoc => is a component , which takes a old (original) component  as an argument,  and return a new enhanced verion of same component 

import React, { useState } from 'react'

const HocComponent = (OriginalComponent) => {
  
    const NewComponent = () => {
        const [count, setCount] = useState(0);
        const countHandler = () => {
            setCount(count + 1);
        }

        return (
            <>
            <OriginalComponent count={count} increment={countHandler}>
            <h1> ghffgfghffhghghgfgh</h1>
                </OriginalComponent>
            </>
        )
    }

    return NewComponent;
}

export default HocComponent