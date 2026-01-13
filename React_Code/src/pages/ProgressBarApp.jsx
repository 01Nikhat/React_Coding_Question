import React, { useEffect, useState } from 'react'
import ProgressBar from '../components/ProgressBar';
import "./ProgressBarApp.css"


export default function ProgressBarApp() {
  const [value,setValue] = useState(0);

  useEffect(() => {
   const id = setInterval(() => {
      setValue(value=>value+1);
    },100)
    
     return () => clearInterval(id);
  },[])

  return (
    <div className="app"> 
      <span >Progress Bar</span>

      <ProgressBar value={value} />
    </div>
  )
}
