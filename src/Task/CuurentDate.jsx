import {useState} from 'react'
export default function CuurentDate(){
    const[date,setDate]=useState("");
    const NewDate=
        ()=>{setDate(new Date().toLocaleString())};
    
    return(
        <>
        <button className="btn btn-info mt-3" onClick={(NewDate)}>DATE & TIME</button>

        <div>
            <h1>{date}</h1>
        </div>

        </>
        
    )
}