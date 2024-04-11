import React from "react";
import { TodosContext } from "../Context/Todos.context";
import styled from "styled-components";
import {Button, Flex} from 'antd';
import {CheckSquareOutlined,BorderOutlined, EditOutlined, DeleteOutlined} from '@ant-design/icons';


function ListItem({title, completed, id, handleCompleted, handleRemove}){
  return (
    <StyledListItem >
      <Flex>
          <span style={{marginRight:'5px'}} onClick={()=>handleCompleted(id)}>{completed? (<CheckSquareOutlined />):(<BorderOutlined />)}</span>
          {title}
      </Flex>
      <Flex gap="small">
          {/* <Button type="primary" ghost ><EditOutlined /></Button> */}
          <Button type="primary" danger ghost onClick={()=>{handleRemove(id)}}><DeleteOutlined /></Button>        
      </Flex>
    </StyledListItem>)
}

const TodoList = () =>{
  const {handleCompleted, handleRemove, groupedTodos} =React.useContext(TodosContext)

  return(
    <div>
        {Object.entries(groupedTodos).map(([date, todos])=>{
            return(
                <div key={date}>
                    <h2>{date}</h2>
                    <ul style={{padding:'0', margin:'0', width:'380px'}}>
                        {todos.map((todo)=>{
                            return (
                                <ListItem 
                                key={todo.id}
                                title={todo.title}
                                completed={todo.completed}
                                id={todo.id}
                                date={todo.date}
                                handleCompleted={handleCompleted}
                                handleRemove={handleRemove}
                                />
                            );
                        })}
                    </ul>                    
                </div>
            )
        })}
    </div>

  )
}
export default TodoList;


// Style
const StyledListItem = styled.li`
    list-style: none;
    padding: 10px;
    margin: 10px 20px;
    /* background-color: #ccc; */
    display: flex;
    align-items:center;
    justify-content: space-between;
    font-size: 24px;
`