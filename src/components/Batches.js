import React from "react";
export const Batches = () => {
  return (
    <div className="container " id="batches">
      <div
        className="container" 

      >
        <table style={{display:'contents'}}>
          <h3 className=" text-center">
            New <span className="text-danger">Batches</span>
          </h3>
          <div id="courses-grid" className="">
            <div className="row">
              <div
                className="col-lg-12 col-md-12 col-sm-12 col-xs-12"
                style={{ marginBottom: "10px" }}
              >
                <div className="table-responsive">
                  <table
                    className="table table-bordered table-hover " 
                    
                  >
                    <thead
                      style={{ backgrounColor: "#002147", color: "#fff" }}
                      className="justfy-content-start"
                    >
                      <tr className=" table-dark">
                        <th>Course</th>
                        <th>Date</th>
                        <th>Timings</th>
                        <th>Duration</th>
                        <th>Trainer</th>
                        <th>Register for Demo</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="">
                        <td>Python Fullstack Development</td>
                        <td>2-OCT-2023</td>
                        <td>4:00 PM - 5:00 PM</td>
                        <td>90 Days</td>
                        <td>Mr. Sudheer</td>
                        <td>
                          <a href="https://hyderabadittrainings.com/python-fullstack-developer-course-hyderabad.php">
                            Register Now
                          </a>
                        </td>
                      </tr>
                      <tr className="">
                        <td>MERN Stack Development</td>
                        <td>6-OCT-2023</td>
                        <td>5:00 PM - 6:00 PM</td>
                        <td>90 Days</td>
                        <td>Mr.Chandrashekar</td>
                        <td>
                          <a href="https://hyderabadittrainings.com/mern-fullstack-developer-course-hyderabad.php">
                            Register Now
                          </a>
                        </td>
                      </tr>
                      <tr className="">
                        <td>DJango</td>
                        <td>6-OCT-2023</td>
                        <td>5:00 PM - 6:00 PM</td>
                        <td>25 Days</td>
                        <td>Mr. Sudheer</td>
                        <td>
                          <a href="https://hyderabadittrainings.com/python-django-training-hyderabad.php">
                            Register Now
                          </a>
                        </td>
                      </tr>
                      <tr className="">
                        <td>UIUX Designing</td>
                        <td>3-OCT-2023</td>
                        <td>11:00 AM - 12: 00 PM</td>
                        <td>90 Days</td>
                        <td>Mr.shakthivel</td>
                        <td>
                          <a href="https://hyderabadittrainings.com/ui-ux-designing-course-hyderabad.php">
                            Register Now
                          </a>
                        </td>
                      </tr>
                      <tr className="">
                        <td>UI Development</td>
                        <td>6-OCT-2023</td>
                        <td>5:00 PM - 6:00 PM</td>
                        <td>70 Days</td>
                        <td>Mr.Bharghav</td>
                        <td>
                          <a href="https://hyderabadittrainings.com/ui-developer-course-hyderabad.php">
                            Register Now
                          </a>
                        </td>
                      </tr>
                      <tr className="">
                        <td>Python with DJango</td>
                        <td>4-OCT-2023</td>
                        <td>6:00 PM - 7:00 PM</td>
                        <td>45 Days</td>
                        <td>Mr. Sudheer</td>
                        <td>
                          <a href="https://hyderabadittrainings.com/python-training-hyderabad.php">
                            Register Now
                          </a>
                        </td>
                      </tr>
                      <tr className="">
                        <td>Web Designing</td>
                        <td>4-OCT-2023</td>
                        <td>5:00 PM - 6:00 PM</td>
                        <td>45 Days</td>
                        <td>Mr.Bharghav</td>
                        <td>
                          <a href="https://hyderabadittrainings.com/web-designing-course-hyderabad.php">
                            Register Now
                          </a>
                        </td>
                      </tr>
                      <tr className="">
                        <td>React JS</td>
                        <td>6-OCT-2023</td>
                        <td>9:00 AM - 10:00 AM</td>
                        <td>25 Days</td>
                        <td>Mr.Bharghav</td>
                        <td>
                          <a href="https://hyderabadittrainings.com/reactjs-training-hyderabad.php">
                            Register Now
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </table>
      </div>
    </div>
  );
};
