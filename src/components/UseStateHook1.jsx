import React,{useState} from 'react'

const UseStateHook1 = () => {

   const [todoItems, setTodoItems] = useState({
    title:'',
    description:''
   }); // [currentState, UpdateStateFunction]
//    const [description, setDescription] = useState(''); // string

   const handleChange = (event) => {
    console.log(event.target.value, event.target.name);
    // setTitle(event.target.value);
    setTodoItems({
        [event.target.name] : event.target.value
    })
   }

  return (
    <div>
      <input type='text' name='title' placeholder='add new title' value={todoItems.title} onChange={handleChange}/>
      <input type='text' name='description' placeholder='add new description' value={todoItems.description} onChange={handleChange}/>
    </div>
  )
}

export default UseStateHook1