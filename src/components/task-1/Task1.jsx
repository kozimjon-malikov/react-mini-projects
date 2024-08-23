import React from 'react'
import { Link } from 'react-router-dom';
export default function Task1() {
  const data=new Date();
  let currentData=data.getHours();
  let minute=data.getMinutes();
  let second=data.getSeconds();
  let greeting='';
  let task1={
    color:'blue',
    background:'crimson',
    height:'100vh',
    display:'grid',
    placeItems:'center',
    overflow:'hidden',
  } 
  if(currentData<12){
    greeting="Good morning",
    task1.background="crimson"
    task1.color="white"
  }else if(currentData<18){
    greeting='Good evening',
    task1.background="green"
    task1.color="white"
  }else{
    greeting="Good night",
    task1.background="black"
    task1.color="gold"
  }

  return (
    <div style={task1} className='relative'>
      <span className='mt-2'>
        {currentData+':'+minute+':'+second}
      </span>
      <h2 className='text-center  text-4xl font-medium' style={task1}>{greeting}</h2>

          <div className="sticky bottom-0 right-1">
            <Link to={'/'}>Home</Link>
          </div>
    </div>
  )
}
