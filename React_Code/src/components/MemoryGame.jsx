import React, { useEffect, useState } from 'react'
import "./MemoryGame.css"

export default function MemoryGame() {
  const [cards,setCards] = useState(generateGrid());
  const [FlippedCards,setFlippedCards] = useState([]);
  const [islock,setIsLock]=useState(false);

  const handleClick=(index)=>{
    if (cards[index].isFlipped || islock) {
      return;
    }
    const copyCards =[...cards];
    copyCards[index].isFlipped=true;
    setCards(copyCards);
    setFlippedCards([...FlippedCards,index]);
  }

  useEffect(()=>{
    if (FlippedCards.length === 2) {
      setIsLock(true);
      setTimeout(()=>{
        if (cards[FlippedCards[0]].number!==cards[FlippedCards[1]].number ) {
          setCards((prevCards )=>{
            const copyCards = [...prevCards];
            copyCards[FlippedCards[0]].isFlipped = false;
            copyCards[FlippedCards[1]].isFlipped = false;
            return copyCards;
          })
        }
        setIsLock(false);
        setFlippedCards([]);
      },3000)
    }
  },[FlippedCards])

  return (
    <div className='grid-container'>
     {cards.map(({id,number,isFlipped})=>{
      return <div key={id} className='cards' onClick={()=>handleClick(id)}> 
        {isFlipped ? number: "?"  }
      </div>
     })}
    </div>
  )
}

function generateGrid(){
  const arr = Array.from({length:18},(_,index)=>index+1)
 // console.log(arr);
  const grid = [...arr, ...arr].sort(()=>Math.random() -0.5);
 // console.log(grid);
 const cards = grid.map((item,index)=>{
  return {id:index, number:item, isFlipped:false}
 });
//  console.log(cards);
  return cards;
}