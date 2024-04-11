import React from "react";
import { Calendar } from 'antd';
import { Link } from "react-router-dom";
import styled from "styled-components";


export const Header =()=>{
    return(
        <h1 style={{backgroundColor: '#ccc' }}>Todo-List Header</h1>
    )
}
export const Slider =()=>{
    return(
        <div style={{backgroundColor: '#ccc',width:'320px',height:'100vh'}}>
            <Calendar style={{margin:'10px'}} fullscreen={false}/>
            <ul style={{margin:'0',padding:'0'}}>
                <StyledLinkItem>
                    <Link to={'/'}>AllTodos</Link>
                </StyledLinkItem>
                <StyledLinkItem>
                    <Link to={'/inprogress'}>InProgress</Link>
                </StyledLinkItem>

            </ul>
        </div>
    )
}

const StyledLinkItem = styled.li`
    list-style: none;
`