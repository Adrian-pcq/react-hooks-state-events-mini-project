import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [task,setTask]=useState(TASKS)
  const [select,setSelect]=useState("")

  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES}  Tasks={TASKS} setTask={setTask} select={select} setSelect={setSelect}/>
      <NewTaskForm />
      <TaskList tasks={task} setTask={setTask} />
    </div>
  );
}

export default App;
