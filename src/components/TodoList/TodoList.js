import React from "react";

const TodoList = () =>{

    return(<>
        <div>
            <h1 style={{textAlign:'center', color:'black'}}>My To Do List</h1>
            <div style={{textAlign:"center"}}>
            <input
                type="text"
                placeholder="Enter Your Task"
                style={{padding:"10px"}}
            >
            </input>
            <button
            style={{backgroundColor:"darkblue", border:"1px", color:"white", padding:"10px", 
            }}>
                Add
            </button>
            <ul style={{listStyleType:"circle"}}></ul>
            </div>
            </div>
       
    </>)
}

export default TodoList;

