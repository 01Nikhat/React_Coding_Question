import React, { useState } from 'react'
import "./GridRevision.css";


function Cell({filled,onClick}){
  return <button className={filled? "cell cell-activated":"cell"}
  onClick={onClick}></button>

}
export default function GreedRevision() {
  const [order,setOrder] = useState([]);
  const [isDeactivaing,setIsDeactivating] = useState(false);

  const config = [
    [1,1,1],
    [1,0,1],
    [1,1,1]]
const deactivateCell=  ()=>{
  setIsDeactivating(true);
  const timer = setInterval(()=>{
    setOrder((originalOrder)=>{
      const newOrder = originalOrder.slice();
      newOrder.pop();

      if (newOrder.length === 0) {
        clearInterval(timer);
        setIsDeactivating(false);
      }
      return newOrder;
    }
    )
  },300)
}

const activateCell = (index)=>{
  const newOrder = [...order,index];
  setOrder(newOrder);
  console.log(newOrder);
  
  if (newOrder.length === config.flat(1).filter(Boolean).length) {
    deactivateCell();
    
  }
}

  return (
    <div className='wrapper'>
      <div className='greed' style={{gridTemplateColumns:`repeat(${config[0].length},1fr)`}}>
      {
        config.flat(1).map((value,index)=>{
          return value? <Cell 
          key={index}
          filled={order.includes(index)}
          onClick={()=>activateCell(index)} />:<span />
        })
      }
      </div>
      
    </div>
  )
}
