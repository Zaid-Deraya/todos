import React from "react";

function TodoList({ todos, setTodos, setEditTodo, editTodo }) {
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };
  return (
    <div>
      {todos.map((todo) => (
        <li className="list-item" key={todo.id}>
            
            <h3 className={`list ${todo.completed ? "complete" : ""}`}>{todo.title}</h3>
           
            
          {/* <input
            type=""
            value={todo.title}
            className="list"
            onChange={(e) => e.preventDefault()}
          /> */}
          <div className="btns">
            <button
              className=" task-button button-complete"
              onClick={() => handleComplete(todo)}
            >
              <i class="bi bi-check-circle-fill"></i>
            </button>
            <button
              className="task-button button-edit"
              onClick={() => handleEdit(todo)}
            >
              <i class="bi bi-pencil-square"></i>
            </button>
            <button
              className="task-button button-delete"
              onClick={() => handleDelete(todo)}
            >
             <i class="bi bi-trash-fill"></i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
}

export default TodoList;
