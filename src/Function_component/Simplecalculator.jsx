import { Component, useState } from "react";
export default function Simplecalculator(){
    const [count,setCount]=useState(0)
    return(
        <div>
            <div className="text-primary h1 text-center">SIMPLE CALCULATOR</div>
            <div className="h2">Count:{count}</div>
            <div className="btn-group">
                <button onClick={()=>setCount(count+1)}>ADD</button>
                <button onClick={()=>setCount(count-1)}>SUB</button>
                <button onClick={()=>setCount(count*2)}>MUL</button>
                <button onClick={()=>setCount(count/2)}>DIV</button>
                <button onClick={()=>setCount(0)}>RESET</button>
            </div>
        </div>
    )
}