import React from "react";

function CategoryFilter({categories,select,setSelect,Tasks,setTask}) {
  
  function handleSelect (category){
    //changes the value of the className
    setSelect(category)

    // if category = All restart the value of task to its origin
    if(category === "All"){setTask(Tasks) }
    // filter the origin 
    else {const filteredTasks = Tasks.filter((task) => task.category === category);
      setTask(filteredTasks);}
  }
  
  const categoryButton =  categories.map(category=>(
    <button key={category} className={select===category ? "selected" : " "} onClick={()=>handleSelect(category)} > {category} </button>
    )
  )
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categoryButton}
    </div>
  );
}

export default CategoryFilter;