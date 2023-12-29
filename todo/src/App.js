import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const[toDos,settoDos]=useState([])

  const[toDo,settoDo]=useState('')

  const setArray =()=>{
    const existsTodo =toDos.find(toDos=>toDos.text===toDo)
    if (existsTodo){
      alert('Already exist');
    }else{
      settoDos([...toDos,{id:Date.now(),text:toDo,default:false}])
    }
  }

  const removeElement=(id)=>{
    settoDos(toDos.filter(toDo=>toDo.id!==id))
  }

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Monday 🌝 ☕ </h2>
      </div>

      <div className="input">
        <input value={toDo} onChange={(e)=>settoDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={setArray} className="fas fa-plus"></i>
      </div>

      <div className="todos">
        {toDos.map((obj)=>{
          return(
            <div className="todo">
          <div className="left">
            <input onChange={(e)=>{
              console.log(e.target.checked)
              console.log(obj)
              settoDos(toDos.filter(obj2=>{
                if (obj2.id===obj.id){
                  obj2.status=e.target.checked
                }
                return obj2
              }))

            }} value={obj.status} type="checkbox" name="" id="" />
            <p>{obj.text}</p>
          </div>
          <div className="right">
            <i className="fas fa-times" onClick={()=>removeElement(obj.id)}></i>
          </div>
        </div>)
        })}
        <br/>
        <h1> Completed Task</h1>
        {toDos.map((ob)=>{
          if(ob.status){
            return (<h2>{ob.text}</h2>)
          }
          return null
        })}
      </div>
    </div>
  );
}

export default App;



