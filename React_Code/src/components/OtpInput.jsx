import React, { useEffect, useRef, useState } from 'react'
import "./OtpInput.css";

const digitCount = 5;
export default function OtpInput() {

  const[inputArr, setInputArr] = useState( new Array(digitCount).fill(""));

  const refArr = useRef([]);

  const handleBackSpace = (e,index) =>{
    if (!e.target.value && e.key ==="Backspace") {
       refArr.current[index-1]?.focus();
    }
   
  }

  useEffect(() => {
    
    refArr.current[0]?.focus();
  },[])

  const handleInputChange =(e,index)=>{
    if(isNaN(e.target.value)) return;
    const newArray = [...inputArr];
    const value = (e.target.value.slice(-1).trim());
    newArray[index] = value;
    setInputArr(newArray);
   { value && refArr.current[index+1]?.focus()};
  }

  return (
    <div className='container'>
      {inputArr.map((input,index)=>{
        return (
          
            <input key={index} type="text" className = "inputBox" value={inputArr[index]}
            inputMode='numeric'
             onChange={(e)=>handleInputChange(e,index)}
            ref={(input)=>(refArr.current[index]=input)}
            onKeyDown={(e)=>handleBackSpace(e,index)} />
            
          
        )      })}
    </div>
  )
}
