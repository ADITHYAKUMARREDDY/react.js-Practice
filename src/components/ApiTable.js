import axios from 'axios'
import React, { Component } from 'react'

export default class ApiTable extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         ppops:[]
      }
    }




    componentDidMount()
    {
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then((response)=>{
            this.setState({ppops:response.data})

        })
        .catch((ele)=>{
            console.log("ele");
        })
    }
  render() {

    return (<>
      <div>ApiTable</div>
      <div class="table-responsive">
        <table class="table table-primary">
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
               { this.state.ppops.map((item)=>{
                return (
                    <tr>
                        <td>{item.userId}</td>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        
                    </tr>
                )
               })}
            </tbody>
        </table>
      </div>
      
      </>
    )
  }
}
