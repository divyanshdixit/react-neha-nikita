import React from 'react'

const Arrays = ({arr}) => {
  return (
    // expression
    <div>
        {
            arr.map((val,idx) => {
                return <div> 
                    <h1 key={idx}> {val} </h1>
                    </div>
            })
        }
    </div>
    
  )
}

export default Arrays