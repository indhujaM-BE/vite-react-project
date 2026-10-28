import {useState} from 'react'
import Result from './Result';
export default function Details(){
    return(
        <div className="container mt-3">
            <h2 className="text-center text-info">STUDENT DETAILS</h2>
            < Result name="indhuja" age={21}/>
            <Result name="Aarthi" age={21}/>
            <Result name="Subetha" age={21}/>
        </div>
    );
}