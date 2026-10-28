import {useState} from 'react'
import MarkResult from './MarkResult';
export default function MarkList(){
    const[mark,setMark]=useState({
        Tamil:"",
        English:"",
        Maths:"",
        Science:"",
        Social:""
    });
    const subjects=["Tamil","English","Maths","Science","Social"]
    const handleChange=(e)=>{
        setMark({
            ...mark,[e.target.name]:e.target.value
        });
    };
    return(
        
          <div className="container mt-3">
                <h2 className="text-center text-info">STUDENT RESULT</h2>
              {subjects.map((subject)=>(
                    <div className="mb-3" key={subject}>
                        <label className="form-label">{subject}mark</label>
                
                <input
                 type="number"
                 name={subject}
                 className="form-control"
                 placeholder={`Enter ${subject} Mark`}
                 min="0"
                 max="100"
                 value={mark[subject]}
                 onChange={handleChange}
                 
                 />
                 <MarkResult
                   subject={subject}
                   mark={mark[subject]}/>
                
          </div>
        
        ))}
        </div>
    );
}
