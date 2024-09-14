import axios from "axios";
import React, {  useEffect, useState } from "react";

const AddEmployye = () => {
  const [id, setId] = useState("");
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Salary, setSalary] = useState("");
  const [Message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(()=>{
    axios.get("http://localhost:4000/employee")
    
  })
 

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/employee", {Name, Email, Salary, Message })
      .then((e) => {
        setId("");
        setName("");
        setEmail("");
        setSalary("");
        setMessage("");
        setSuccess(true);
      
        
      })
      .catch(() => {  
        alert("Added unsuccessful");
      });
  };

  return (
    <div className="container">
      <div className="col-6 mx-auto p-5 ">
        <div className="bg-dark p-2">
          <form onSubmit={submitHandler}>
            <input
              type="number"
              placeholder=" id"
              value={id}
              onChange={(e) => {
                setId(e.target.value);
              }}
              className="form-control mb-2"
            ></input>
            <input
              type="text"
              placeholder="Name"
              value={Name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="form-control  mb-2"
            ></input>
            <input
              type="text"
              placeholder=" Email"
              value={Email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="form-control mb-2"
            ></input>
            <input
              type="text"
              placeholder="Salary"
              value={Salary}
              onChange={(e) => {
                setSalary(e.target.value);
              }}
              className="form-control  mb-2"
            ></input>
            <input
              type="text"
              placeholder="Message"
              value={Message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              className="form-control mb-2"
            ></input>
            <input
              type="submit"
              className="btn btn-secondary"
              value="Add Employee"
            />
          </form>
        </div>
        <div>{success ? "DATA ADDED SUCCESSFULLY" : null}</div>
      </div>
    </div>
  );
};

export default AddEmployye;
