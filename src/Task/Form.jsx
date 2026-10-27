
import { useState } from 'react';

export default function Form() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [show, setShow] = useState(false);
  return (
    <div className="container mt-5 ">
    <div className="text-center text-info">
      <h2>Student Details Form</h2>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setShow(true);
        }}
      >
        <div className="mb-3">
          <label>Name:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setShow(false);
            }}
            required
          />
        </div>
        <div className="mb-3">
          <label>Age:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your age"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
              setShow(false);
            }}
            required
          />
        </div>
        <button type="submit" className="  btn btn-primary">
          Submit
        </button>
      </form>
      {show && (<div className="mt-4"><h3>Student Details</h3><p>Name: {name}</p><p>Age: {age}</p></div> )}
    </div>
  );
}


