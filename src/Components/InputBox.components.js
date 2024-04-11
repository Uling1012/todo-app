import React from "react";
import { TodosContext } from "../Context/Todos.context";
import {Button, DatePicker, Form, Input} from 'antd';
import { v4 as uuidv4 } from "uuid";


export const InputBox =()=>{
    const {createTodo} = React.useContext(TodosContext)
    // const {newTodo} =React.useContext(TodosContext)
    const [form] = Form.useForm();
    const onFinish =(values)=>{
        values.date = values.date.format('YYYYMMDD') 
        values.completed = false;
        values.id = uuidv4();
        createTodo(values);
        form.resetFields();
    }
    const handleReset =()=>{
        form.resetFields();
    }
    return(
      <div>
        <Form onFinish={onFinish} form={form} >
          <Form.Item label='Title' name='title' rules={[{required:true, message:'Please input todo title!'}]}>
            <Input />
          </Form.Item>
          <Form.Item  label="Date" name='date' rules={[{required:true, message:'Please select date'}]}>
            <DatePicker />
          </Form.Item>
          <Form.Item>
            <Button onClick={handleReset}>
              Reset
            </Button>
            <Button htmlType="submit">
              Create Todo
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }