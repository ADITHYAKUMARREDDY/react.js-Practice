import axios from 'axios'
import React, { Component } from 'react'

export default class Api extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         pops :[]
      }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((res)=>{
            this.setState({pops:res.data})

            console.log(res.data)
        }
        )

        .catch((err)=>{
            console.log("error",err)
        })
    }
  render() {
    return (<>
    <div className='conatainer d-flex flex-wrap '>
        {this.state.pops.map((ele)=> {

            return(<div className="card m-3 flex-grow-1 overflow-auto" style={{width: "15rem",
            height:"12rem" }}>
            <div class="card-body">
              <h5 class="card-title">{ele.id}</h5>
              <p class="card-text">{ele.body}</p>
             
            </div>
          </div>
       ) })}
        </div></>

    )
  }
}
