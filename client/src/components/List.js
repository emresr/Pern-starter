import React, { useState,useEffect } from "react";
import Update from "./Update";



const List = () => {

const [todos, setTodos] = useState([]);

  const deleteTodo = async id => {
    try {
      const deleteTodo = await fetch(`http://localhost:5000/todo/todos/${id}`, {
        method: "DELETE"
      });

      setTodos(todos.filter(todo => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todo/todos");
      const jsonData = await response.json();

      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);




  console.log(todos);

	return (
		<div>
		{""}
			<table class="table mt-5 text-center">
        <thead>
          <tr>
            <th className="list-done">Done</th>
            <th>Title</th>
            <th>Priority</th>
            <th> Tags</th>
            <th>Date</th>
            <th>     </th>
              <th>     </th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <tr key={todo.todo_id}>
              <td className="list-done"> <input type="checkbox" checked={todo.done}/> </td>
              <td>{todo.title}</td>
              <td className="list-priority">{todo.priority}</td>
              <td className="list-tags">{todo.tag}</td>
              <td className="list-date">{todo.date}</td>

              <td>
                <Update todo={todo} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.todo_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
		</div>
	);
};

export default List;
