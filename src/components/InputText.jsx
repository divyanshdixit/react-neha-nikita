import React, {forwardRef} from 'react';

const InputText = forwardRef((props, ref) => {
  return (
    <input type='text' placeholder='enter your name' value="divyansh" ref={ref}/>
  )
})

export default InputText