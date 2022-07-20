import React, { memo } from "react";
const Child = (props)=>{
console.log('Child Rendering')
const list = props
console.log("List", list)
   return (
    <>
        <h1>Child Components</h1>
        {list.todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </>
   )
}
export default memo(Child)