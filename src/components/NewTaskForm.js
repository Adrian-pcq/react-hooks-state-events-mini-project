import React, { useState } from "react";

function NewTaskForm({categories,onTaskFormSubmit}) {
  const[form,setForm]=useState({text:"",category:"Code"})
  const option = categories.map(category=>( category !=="All" ? <option key={category}>{category}</option>:null ) )

  function handleChange(e){
    setForm({
      ...form,[e.target.name]:e.target.value
    })
 }

  function handleSubmit(e){
    e.preventDefault()
    onTaskFormSubmit(form)
  }

  return (
    <form className="new-task-form" onChange={handleChange} onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category" >
          {/* render <option> elements for each category here */}
          {option}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}
 
export default NewTaskForm;
