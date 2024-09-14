import React, { Component } from "react";
import { Contact } from "./components/Contact";
import { Button } from "bootstrap";
import User from './User';

export default class UnMount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "hi",
      id: 1212,
      tf:false
    };
  }
  change = ()=>{
    this.setState({
     tf:true
    })
    
     console.log("hello")
 
}
   



  render() {

    console.log(this.state.tf)
   
    // var syncor;
    // if (this.state.tf) {
    // //   syncor =
    // } else {
    //   console.log("Fail");
    // }
    return (
      <>
        <h2>Welcome Bye</h2>
        {/* {syncor} */}
        <button type="button" class="btn btn-primary" onClick={this.change}>
          Click me!
        </button>
       {this.state.tf? <User/>: null}
       {/* <User/> */}
      </>
    );
  }
}
