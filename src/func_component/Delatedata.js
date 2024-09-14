import axios from "axios";
import React, { useEffect, useState } from "react";

export const Deletedata = () => {
  const [employee, setEmployee] = useState([]);
  const [tig,setTig] = useState(false)
 
useEffect(()=>{
    axios
    .get("http://localhost:4000/employee")
    .then((res) => {
      setEmployee(res.data);
      setTig(false)
    }) 
    .catch((error) => {
      console.log(error);
    });
  
 },[tig]) 

  const deleted = (id) => {
    console.log(id)
    axios 
      .delete("http://localhost:4000/employee/"+id)
      .then((userid) => {
        console.log(userid);
        setTig(true)

      })
      .catch((ele) => {
        alert("error");
      });
  };
  return (
    <>
      <div>
        <div className="table-responsive">
          <table className="table ">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Salary</th>
                <th>Message</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {employee.map((ele) => {
                return (
                  <tr key={ele.id}>
                    <td>{ele.id}</td>
                    <td>{ele.Name}</td>
                    <td>{ele.Email}</td>
                    <td>{ele.Salary}</td>
                    <td>{ele.Message}</td>
                    <div>
                      <button className="btn btn-secondary" onClick={()=>deleted(ele.id)}>
                        <i class="fa-solid fa-trash"></i>
                      </button>
                    </div>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
