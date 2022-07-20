import React, { useState } from "react";
import Child from "./child";

const Count =()=>{
    const [counter, setCounter] = useState(0)
    const incremetnCount = () => {
        setCounter(counter + 1)

    }
    const decrement = () => {

        setCounter(counter - 1)

    }
   
    return(
<>
<h1>Counter</h1>
<button onClick={incremetnCount}>Count - </button> <span>{counter}</span>
<button onClick={decrement}>Count - </button> 
<Child/>

</>
    )

}

export default Count