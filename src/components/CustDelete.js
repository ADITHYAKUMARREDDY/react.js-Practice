import React, { Component } from "react";
import axios from "axios";

export default class CustDelete extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employee: [],
    };
  }
  componentDidMount() {
    axios
      .get(`http://localhost:4000/employee`)
      .then((res) => {
        this.setState({
          employee: res.data,
        });
      })
      .catch((dat) => {
        console.log(dat);
      });
  }
  deletedata(userid) {
    axios
      .delete(`http://localhost:4000/employee/${userid}`)
      .then(() => {
        console.log(userid);
        alert("Deleted successfully");
      })
      .catch((ele) => {
        alert("error");
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
                    <th>id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Salary</th>
                    <th>Message</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.employee.map((ele) => {
                    return (
                      <>
                        <tr key={ele.id}>
                          <td>{ele.id}</td>
                          <td>{ele.Name}</td>
                          <td>{ele.Email}</td>
                          <td>{ele.Salary}</td>
                          <td>{ele.Message}</td>
                          <td className="d-flex justify-content-around">
                            <button
                              type="button"
                              class="btn btn-secondary "
                              onClick={() => {
                                this.editdata(ele.id);
                              }}
                            >
                              edit
                            </button>
                            <button
                              type="button"
                              class="btn btn-danger"
                              onClick={() => {
                                this.deletedata(ele.id);
                              }}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div>
          <div classNameName="container ">
            <section
              className="mb-4 d-flex  flex-column mx-auto my-auto"
              style={{ width: "50%" }}
            >
              <h2 className="h1-responsive font-weight-bold text-center my-4">
                Contact us
              </h2>

              <div className="row">
                <div className="col-md-9 mb-md-0 mb-5">
                  <form
                    id="contact-form"
                    name="contact-form"
                    action="mail.php"
                    method="POST"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <div className="md-form mb-0">
                          <input
                            type="text"
                            id="Name"
                            name="Name"
                            className="form-control"
                          />
                          <label for="name" className="">
                            Name
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="md-form mb-0">
                          <input
                            type="text"
                            id="Email"
                            name="Email"
                            className="form-control"
                          />
                          <label for="email" className="">
                            Email
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <div className="md-form mb-0">
                          <input
                            type="text"
                            id="Salary"
                            name="Salary"
                            className="form-control"
                          />
                          <label for="subject" className="">
                            Salary
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="md-form">
                          <textarea
                            type="text"
                            id="Message"
                            name="Message"
                            rows="2"
                            className="form-control md-textarea"
                          ></textarea>
                          <label for="message">Message</label>
                        </div>
                      </div>
                    </div>
                  </form>

                  <div className="text-center text-md-left">
                    <button onClick={this.submitHandler}>SUBMIT</button>
                  </div>
                  <div className="status"></div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </>
    );
  }
}
