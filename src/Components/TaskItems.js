import React from "react";
import { useDispatch } from "react-redux";
import { delete_task, complete } from "../JS/Actions/actions";
import EditTask from "./EditTask";

const TaskItems = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div className="todo-row">
      {todo.name}

      <div>
        <div className="dce">

        <button className="task" onClick={() => dispatch(delete_task(todo.id))}>Delete</button>
        <EditTask todo={todo} />
       
        <button  className="task" onClick={() => dispatch(complete(todo.id))}>
          {" "}
          {todo.IsDone ? "Undo" : "complete"}{" "}
        </button></div>
      </div>
    </div>
  );
};

export default TaskItems;