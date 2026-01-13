import React, { useState } from 'react'
import "./Greed.css";
import { set } from 'mongoose';


function Cell({filled,onClick}){
    return <button type='button'
    onClick={onClick}
    className={filled?"cell cell-activated":"cell"} />
  }

export default function Greed() {

  const [order,setOrder] = useState([]);
  const [isDeactivaing,setIsDeactivating] = useState(false);

  const config = [
    [1,1,1],
    [1,0,1],
    [1,1,1]
  ]

  


  const activateCell = (index)=>{
    const newOrder = [...order,index];
    setOrder(newOrder);

    if (newOrder.length === config.flat(1).filter(Boolean).length) {
      deactivateCell();
      
    }
  }

  const deactivateCell = ()=>{
    setIsDeactivating(true)
    const timer = setInterval(()=>{
      setOrder((originOrder)=>{
        const newOrder = originOrder.slice()
        newOrder.pop();

        if (newOrder.length ===0) {
          clearInterval(timer);
          setIsDeactivating(false);
        }
        return newOrder;
      })
      
    },300)

  }
  
  return (
    <div className='wrapper'>
      <div className='greed' style={{
        gridTemplateColumns:`repeat(${config[0].length},1fr)`
      }}>
        {config.flat(1).map((value,index)=>{
          return value ? <Cell 
          key={index}
          filled={order.includes(index)}
          onClick={()=>activateCell(index)} />
          : <span />
        })}

      </div>
      
    </div>
  )
}
