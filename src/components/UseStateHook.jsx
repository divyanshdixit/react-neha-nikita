import React,{useState} from 'react'

const UseStateHook = () => {

   const [title, setTitle] = useState(''); // [currentState, UpdateStateFunction]
   const [description, setDescription] = useState(''); // string

   const handleChange = (event) => {
    console.log(event.target.value);
    setTitle(event.target.value);
    
   }

  const handleChange1 = (event) => {
    setDescription(event.target.value)
  }

  return (
    <div>
      <input type='text' placeholder='add new title' value={title} onChange={handleChange}/>
      <input type='text' placeholder='add new description' value={description} onChange={handleChange1}/>
    </div>
  )
}

export default UseStateHook