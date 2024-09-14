import React, { Component } from "react";

import axios from "axios";

export default class CustUpdate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Name: "",
      Email: "",
      Salary: "",
      Message: "",
    };
  }
  componentDidMount() {
    axios
      .put("http://localhost:4000/employee/4")
      .then((res) => {
        this.setState({
          id: res.data.id,
          Name: res.data.Name,
          Email: res.data.Email,
          Salary: res.data.Salary,
          Message: res.data.Message,
        });
      })
      .catch((res)=>{
        alert("Error")
      });
  }
  UpdateData =(e)=>{
    this.setState({
        [e.target.name]:e.target.value,
    })
  }
  render() {
    const { Name, Email, Salary, Message } = this.state;
    return (
      <>
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
                          value={Name}
                          onChange={this.UpdateData}
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
                          value={Email}
                          onChange={this.UpdateData}
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
                          value={Salary}
                          onChange={this.UpdateData}
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
                          value={Message}
                          onChange={this.UpdateData}
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
      </>
    );
  }
}
