import React, { useEffect, useState } from "react";
import Child from "./child";

const Count =()=>{
    const [counter, setCounter] = useState(0)
    const [todos, setTodos] = useState(["todo 1", "todo 2"]);

    const incremetnCount = () => {
        setCounter(counter + 1)

    }
    const decrement = () => {

        setCounter(counter - 1)

    }
   
    useEffect(()=>{
        console.log("Counter Rendering")
    })
    return(
<>
<h1>Counter</h1>
<button onClick={incremetnCount}>Count - </button> <span>{counter}</span>
<button onClick={decrement}>Count - </button> 
<Child todos = {todos}/>

</>
    )

}

export default Count