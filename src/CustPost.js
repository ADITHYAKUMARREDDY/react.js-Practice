import React, { Component } from "react";
import axios from "axios";

export default class CustPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Name: "",
      Email: "",
      Salary: "",
      Message: "",
    };
  }
  changeData = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  submitHandler = (E) => {
    const { Name, Email, Salary, Message } = this.state;
    E.preventDefault();
    axios.post("http://localhost:4000/employee", { Name, Email, Salary, Message })

      .then(() => {
        alert("Added");
        this.setState({
          Name: "",
          Email: "",
          Salary: "",
          Message: "",
        });
      })
      .catch((ele) => {
        console.log(ele);
      });
  };
  render() {
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
                          value={this.state.Name}
                          onChange={this.changeData}
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
                          value={this.state.Email}
                          onChange={this.changeData}
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
                          value={this.state.Salary}
                          onChange={this.changeData}
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
                          value={this.state.Message}
                          onChange={this.changeData}
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
