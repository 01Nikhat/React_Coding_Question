import text from 'body-parser/lib/types/text';
import React, { useState } from 'react'
import "./TodoList.css";

export default function TodoList() {

  const [input,setInput] = useState("");
  const [todoList,setTodoList] = useState([])

const AddTodoItem = () =>{
  const item = {
    id: input.length+1,
    text: input,
    completed:false
  }

  setTodoList((prev)=>[...prev,item]);
  setInput("");
}

const deleteTodoItem = (id) =>{
  setTodoList(todoList.filter((t)=> t.id !==id));
}

const toggleCompleted = (id) =>{
  setTodoList(todoList.map(t=>{
    if (t.id === id) {
      return {
        ...t,
        completed: !t.completed
      }
    }
    else{
      return t;
    }
  })
);

}
  return (
    <div  className='container'> 
    <div>
    <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
    <button onClick={()=>AddTodoItem()}>Add</button>
    </div>
    <ul>
      {todoList.map((item, index)=>{
        return  <li key={item.id}>
            <input type="checkbox" onChange={()=>toggleCompleted(item.id)} />
            <span className={item.completed? "strikeThrough":""}>{item.text}</span>
            <button onClick={()=>deleteTodoItem(item.id)}>Delete</button>
          </li>
        
      })}
    </ul>
    </div>
  )
}
