import { createContext, useState, useEffect } from "react";

export const TodosContext = createContext ({
    todos: null,
    setTodos: () => { },
    hadleCompleted: () => { }
});


const defaultTodos = [
    {title: 'ProjectA', completed: true, date: '20240331'},
    {title: 'ProjectB', completed: false, date: '20240728'},
    {title: 'ProjectC', completed: false, date: '20240128'},
    {title: 'ProjectD', completed: true, date: '20240128'},
    {title: 'ProjectE', completed: false, date: '20240128'}
]

export const TodosProvider =({children})=>{
    const [todos, setTodos] = useState(defaultTodos)
    const handleCompleted = (index) =>{
        const newTodos = todos.map((todo, idx)=>{
            if(idx === index){
              return{
                ...todo,
                completed: !todo.completed
            }
            }else{
              return todo;
            }
          })
          setTodos(newTodos)
    }
    const handleRemove = (index) =>{
        const newTodos = todos.filter((todo, idx)=>idx!==index);
        setTodos(newTodos)
    }
    const Sorting=()=>{
        const newTodos =todos.sort(function(a,b){      
          return Number(a.date) - Number(b.date);
        })
        setTodos(newTodos);
    };
    useEffect(()=>{Sorting();},[todos]);

    const value = {todos, setTodos, handleCompleted, handleRemove};
    return <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
}