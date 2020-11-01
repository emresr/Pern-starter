
import React, { Fragment, useState } from "react";

const Checkbox = ({todo}) => {

const [done, setDone] = useState([todo.done]);

const updateDone = async e => {
    e.preventDefault();
    try {
      const body = { done };
      const response = await fetch(
        `http://localhost:5000/todo/todos/${todo.todo_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };


return (
      <form>
      <input type="checkbox" checked={todo.done} onChange={updateDone}/> 
      </form>

  )

}
export default Checkbox;