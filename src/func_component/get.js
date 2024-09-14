import axios from "axios";
import React, { useState, useEffect } from "react";
import { Deletedata } from "./Delatedata";

export const Get = () => {
  const [employee, setEmployee] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:4000/employee")
      .then((res) => {
        setEmployee(res.data);
      })
      .catch((err) => {
        alert(err);
        setError("");
      });
  },[]);

  
  return (
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
                    <td >
                      <button type="button" className="btn btn-primary me-2">
                        Update
                      </button>
                      
                    </td>
                  </div>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};
