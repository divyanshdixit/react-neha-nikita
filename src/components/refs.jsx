// using refs we can access DOM  nodes directly within react.
// can be used to save any mutable value
// ref remembers the value which is given untill it changed.

// create ref: inputref
// <input type="text" ref={inputref}
// inputref.current.focus()
// event.target.attribites
import React, {useEffect, useRef, useState} from 'react'
import InputText from './InputText';
// import Input from './Input';

function Refs() {
    const [val, setVal] = useState('');
    const inputRef = useRef(); // null (object)=== undefined (undefined)
    const buttonRef = useRef();
    const headinRef = useRef();
    const newRef = useRef(10);

    const timeoutRef = useRef();
   
    useEffect(() => {
      console.log(inputRef)
    //   inputRef.current.value = "neha";
    //   inputRef.current.focus()
    }, [inputRef]) // mounting, updating

    // useEffect(() => {
    //     console.log(newRef.current) // 10
    //     newRef.current = 100;
    //     console.log(newRef.current) // 100

    // }, [])
    // // useEffect(() => {
    // //   console.log(inputRef, buttonRef, newRef, timeoutRef);
    // //  return () => {
    // //   clearInterval(timeoutRef.current)
    // //  }
    // // }, [inputRef, buttonRef]);

    // const changeInput = (e) => {
    //   console.log(e);
    //   if(!isNaN(e.nativeEvent.data)){
    //     // checking for number input
    //     alert('number can not be used in name');
    //     return false;
    //   }
    //   // setVal(e.target.value)
    // }

    // const clickFun = setInterval(() => {
    //   console.log('first')
    // }, [1000]);

    // timeoutRef.current = clickFun;

    // console.log(clickFun)
  return (
    <>
        {/* <input name={`fname`} value="divyansh" type='text' ref={inputRef}/> */}

        <InputText ref={inputRef}/>

        
        {/* <button type="button" ref={buttonRef} onClick={() => {inputRef.current = 20; console.log(inputRef)}}>Click </button>  */}
    </>
  )
}

export default Refs