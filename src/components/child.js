import React, { memo } from "react";
const Child = (props)=>{
console.log('Child Rendering')
// const counter = props
    return(
    <h1>UseMemo</h1>
    )
}
export default memo(Child)