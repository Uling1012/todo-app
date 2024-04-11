import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const TodosContext = createContext ({
    todos: null,
    groupedTodos: null,
    // todo: null,
    setTodos: () => { },
    hadleCompleted: () => { },
    handleRemove: () => { },
    createTodo: () => { }
});


const defaultTodos = [
    {title: 'ProjectA', completed: true, date: '20240331', id: uuidv4()},
    {title: 'ProjectB', completed: false, date: '20240728', id: uuidv4()},
    {title: 'ProjectC', completed: false, date: '20240728', id: uuidv4()},
    {title: 'ProjectD', completed: true, date: '20240128', id: uuidv4()},
    {title: 'ProjectE', completed: false, date: '20240128', id: uuidv4()},
    {title: 'ProjectF', completed: true, date: '20240128', id: uuidv4()}
]

export const TodosProvider =({children})=>{

    const Sorting = (todos) =>{
      const newTodos = todos.sort(function (a, b) {
        // return Number(a.date) - Number(b.date);
        if (a.date < b.date) return -1;
        if (a.date > b.date) return 1;
        if (a.completed && !b.completed) return 1;
        if (!a.completed && b.completed) return -1;
        return 0;
      });
      return newTodos;
    }

    const [todos, setTodos] = useState(Sorting(defaultTodos));
    // console.log(todos)
    const handleCompleted = (id) =>{
        const newTodos = todos.map((todo)=>{
            if(todo.id === id){
              return{
                ...todo,
                completed: !todo.completed
            }
            }else{
              return todo;
            }
          })
          setTodos(Sorting(newTodos))
    }
    const handleRemove = (id) =>{
        const newTodos = todos.filter((todo)=>todo.id!==id);
        setTodos(newTodos)
    }
    const createTodo = (todo) =>{
      setTodos(Sorting([...todos, todo]))
    }
    const groupedTodos = todos.reduce((acc, cur)=>{
      if(!acc[cur.date]){
        acc[cur.date] = [];
      }
      acc[cur.date].push(cur);
      return acc;
    },{})
    // console.log(groupedTodos);
    const inProgressTodos = todos.filter((todo)=>todo.completed===false)
    console.log(inProgressTodos)

    // useEffect(()=>{
    //   setTodos(Sorting(defaultTodos));
    // }, []);

    const value = {handleCompleted, handleRemove, createTodo, groupedTodos};
    return <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
}