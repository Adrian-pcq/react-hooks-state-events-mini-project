import React from "react";
import Task from "./Task";

function TaskList({tasks,setTask}) {
  
  function handleDelete(text){
   
      const deleted = tasks.filter(tasks=>(tasks.text !== text) )
      setTask(deleted)
  }
  const mappedTasks = tasks.map((task)=>(
    <Task key={task.text} text={task.text} category={task.category} handleDelete={()=>handleDelete(task.text)}/>
  ))
    return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {mappedTasks}
    </div>
  );
}

export default TaskList;
