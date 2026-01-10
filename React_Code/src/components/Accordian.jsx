import React,{useState} from 'react'
import "./Accordian.css";


export default function Accordian({items}) {
  const[openIndex,setOpenIndex] = useState(null);

  const handleToggle =(index)=>{
    setOpenIndex(openIndex === index ? null:index);
    
  }
  return (
    <div className='container'>
      {items.map((item, index)=>{
        return <div key={index} className='container-box'>
                  <button className='button' onClick={()=>handleToggle(index)}>{item.title}
                    <span className='right'>{openIndex === index ?"🔼" :"🔽" }</span>
                  </button>
                  {openIndex === index && <div className='content'>{item.content}</div>}
        </div>
})}
    </div>
  )
}
