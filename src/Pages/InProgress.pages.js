import React from "react";
import TodoList from "../Components/TodoList.components";

const InProgress=()=>{
    return(
        <div>
            <h1>In Progress</h1>
            <TodoList todos ='InProgressTodos'/>
        </div>
    )
}

export default InProgress;