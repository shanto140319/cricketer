import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import {data} from './data'
import './App.css';

function App() {
  const [selectedPlayer,setSelectedPlayer] = useState(0)
  const [budget,setBudget] = useState(0);
  const [index,setIndex] = useState(100)
  const handleClick =(Salary,id)=>{
    setIndex(id)
    const id1= index
    if(id1 === id ){
      return
    }
    setSelectedPlayer(selectedPlayer +1)
    setBudget(budget+Salary)
  }
  return (
    <section className='header'>
      <h2>Bangladesh premier league</h2>
      <h4>Total selected players for team : {selectedPlayer}</h4>
      <h4>Total budget for team : {budget}</h4>

      <div className="players">
        {data.map((player,index)=>{
          const {first_name,email,jarcy_no,image,Salary} = player
          return(
            <article className='player'>
              <img src={image} alt={first_name}/>
              <div className="info">
              <h4>{first_name}</h4>
                <p>Email : {email}</p>
                <h4>Joursey No : {jarcy_no}</h4>
                <h4>Salary : {Salary}</h4>
              </div>
              <button className='btn' onClick={()=>handleClick(Salary,index)}>Add Player</button>
            </article>
          )
        })}
      </div>
    </section>

  );
}

export default App;
