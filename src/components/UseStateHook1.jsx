import React, { useEffect, useState } from "react";

const UseStateHook1 = () => {
  const [todoItems, setTodoItems] = useState({
    title: "",
    description: "",
  });
  const [items, setItems] = useState([]);

  const handleChange = (event) => {
    console.log(event.target.value, event.target.name);
    // setTitle(event.target.value);
    // setTodoItems({
    //     [event.target.name] : event.target.value
    // })

    setTodoItems((prev) => {
      console.log(prev);
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  const addItems = (e) => {
    // items.push();
    setItems((prev) => {
      return [...prev, todoItems];
    });
  };

  const handleDelete = (id) => {
    const n1 = items.filter((i, idx) => {
      return id !== idx // 0!==0 // 0 remove
    })
    setItems(n1);
  };

  return (
    <div>
      <input
        type="text"
        name="title"
        placeholder="add new title1"
        value={todoItems.title}
        onChange={handleChange}
      />
      <input
        type="text"
        name="description"
        placeholder="add new description1"
        value={todoItems.description}
        onChange={handleChange}
      />
      <button type="button" onClick={addItems}>
        {" "}
        Add{" "}
      </button>
      <div>
        {" "}
        {items.map((i, id) => {
          return (
            <>
            <h1> {i.title} {i.description}  </h1>
            <button onClick={() => handleDelete(id)}>
             X
            </button>
            </>
          )
          })}
      </div>
    </div>
  );
};

export default UseStateHook1;
