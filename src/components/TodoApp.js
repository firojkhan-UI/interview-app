import React, { useState } from "react";

function createTodo() {
  let res = [];
  for (let i = 0; i < 50; i++) {
    res.push({
      id: i,
      text: "Item" + i,
    });
  }
  return res;
}

function TodoApp() {
  const [todos, setTodos] = useState(createTodo());
  const [text, setText] = useState("");
  console.log(todos, "TODO::::");

  const removeItem = (e) => {
    let res = [...todos];
    res.splice(e.target.id);
    setTodos([{ res }]);
  };

  return (
    <div>
      <div>TodoApp</div>
      <div>
        <input
          value={text}
          placeholder="Type here..."
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <button
          onClick={() => {
            setTodos([{ id: todos.length, text: text }, ...todos]);
          }}
        >
          Add
        </button>
      </div>
      <div>
        <ul>
          {todos?.map((item, id) => (
            <li onClick={removeItem}>{item.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoApp;
