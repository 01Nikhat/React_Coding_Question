import React from 'react'
import Accordian from '../components/Accordian'

export default function AccordianApp() {

  const Items = [
    {"title":"Html",
      "content":"html is not a language"
    },
  {
    "title":"CSS",
    "content":"css is a styleshit"
  },
{
  "title":"python",
  "content": "it's a programming language"
},
{
  "title":"react",
  "content":"it's a library"
},
{
  "title":"javascript",
  "content":"with the help of js we can modified ui"
}]
  return (
    <div>
      <Accordian items = {Items}/>
    </div>
  )
}
