import React, { Component } from 'react'

export default class LifeCycle extends Component {
    constructor(props) {
      super(props)
      console.log("constructor")
      this.state={
        name:'React'
      }
    }
    changeData=()=>{
        console.log("asdf")
    }
    static getDerivedStateFromProps(){
        console.log("getDerivedStateFromProps")
    }
    componentDidMount(){
        console.log("componentDidMount")
    }
  render() {
    console.log("render" )
    return (
      <div>LifeCycle {this.state.name}</div>
    )
  }
}
