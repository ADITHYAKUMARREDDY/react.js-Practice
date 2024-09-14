import React, { useEffect } from 'react'
import { useState } from 'react';

export const Usestate = () => {
    const [cal,setCal]=useState({
        name:"asdf",
        id:1,
        count:0
    });
    useEffect(()=>{
        document.title ="A"+""+count
    })
    const calUpdate =()=>{
        setCal({
            name: "adithya",
            id:2064,
            count:count+1
        })
    }
    const{name,id,count}=cal;
  return (
    <div>
        <h3> {name+' ' +id}</h3>
        <button onClick={calUpdate}>click Me</button>
        <h3>count:{count}</h3>
        <button onClick={calUpdate}>ADD +</button>

    </div>
  )
}
