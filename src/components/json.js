import axios from "axios";
import React, { Component } from "react";

export default class Json extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:4000/employee")
      .then((res) => {
        this.setState({
          first: res.data,
        });
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <>
        <div>
          <div className="container">
            <div class="table-responsive">
              <table class="table  table-bordered table-hover">
                <thead className="table-dark">
                  <tr> 
                    <th>Name</th>
                    <th>Email</th>
                    <th>Salary</th>
                    <th>Message</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.first.map((ele) => {
                    return (
                      <>
                        <tr key={ele.id}>
                          <td>{ele.id}</td>
                          <td>{ele.Name}</td>
                          <td>{ele.Email}</td>
                          <td>{ele.Salary}</td>
                          <td>{ele.Message}</td>
                          <td><button type="button" class="btn btn-primary">update</button></td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}
