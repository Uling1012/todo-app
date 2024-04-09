import React from "react";
import { TodosContext } from "../Context/Todos.context";
import styled from "styled-components";
import {Button, Flex} from 'antd';
import {CheckSquareOutlined,BorderOutlined, EditOutlined, DeleteOutlined} from '@ant-design/icons';


function ListItem({title, completed, index, handleCompleted, handleRemove}){
  return (
    <StyledListItem >
      <Flex>
          <span style={{marginRight:'5px'}} onClick={()=>handleCompleted(index)}>{completed? (<CheckSquareOutlined />):(<BorderOutlined />)}</span>
          {title}
      </Flex>
      <Flex gap="small">
          <Button type="primary" ghost ><EditOutlined /></Button>
          <Button type="primary" danger ghost onClick={()=>{handleRemove(index)}}><DeleteOutlined /></Button>        
      </Flex>
    </StyledListItem>)
}

const TodoList = () =>{
  const {todos, handleCompleted, handleRemove} =React.useContext(TodosContext)
  return(
      <ul style={{padding:'0', margin:'0', width:'380px'}}>
          {todos.map((todo, index)=>{
              return (
                  <ListItem 
                  key={index}
                  index={index}
                  title={todo.title}
                  completed={todo.completed}
                  handleCompleted={handleCompleted}
                  handleRemove={handleRemove}
                  />
              );
          })}
      </ul>
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