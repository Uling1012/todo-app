import React from "react";
import TodoList from "../Components/TodoList.components";


const AllTodos=()=>{
    return(
    <div>
        <h1>AllTodos</h1>
        <TodoList todos ='AllTodos'/>
    </div>
    )
}

export default AllTodos;