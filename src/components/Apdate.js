import React from 'react'

export default class Apdate extends React.Component(){
    constructor(){
        super()
        this.state={
            heading : ""
        }
    }

    render(){
    return(
        <>        
        <h1>{this.state.heading}</h1>
        <input type="email"  value={this.state.heading}/>
        <button onClick={(e)=>{
            this.setState ={
                heading : e.target.value,
            }
        }}></button>
        </>
    );
    }
}