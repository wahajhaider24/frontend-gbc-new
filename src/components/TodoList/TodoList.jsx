import React from "react";
import "./Todolist.css"

class TodoList extends React.Component{


    constructor(){
        super(); 
        this.state ={
            todos: [],
            newTodo: ''
        };
    }

    addTodo= (task) =>{
            this.setState((prev)=>({
                todos:[...prev.todos, task],
                newTodo: ''
            }));
    }

    handleChange =(e)=>{
        console.log(e.target.value,"<<<")
        this.setState({newTodo: e.target.value})
    }

    addList= () =>{
           if(this.state.newTodo.trim()===null)
            return
            
            this.addTodo(this.state.newTodo);
           
            
    }

    removeList=(index)=>{
        const updatedArry=[...this.state.todos];
        updatedArry.splice(index,1);
        this.setState({
            todos: updatedArry
        })
    }
    render(){
    return(<>
        <div className="todoListBox">
            <h1 style={{textAlign:'center', color:'black'}}>My To Do List</h1>
            <div style={{textAlign:"center"}}>
            <input
                type="text"
                placeholder="Enter Your Task"
                style={{padding:"10px"}}
                value={this.state.newTodo}
                onChange={this.handleChange}

            >
            </input>
            <button
            style={{backgroundColor:"darkblue", border:"1px", color:"white", height:'40px' 
            }}
            onClick={this.addList}
            
            >

                Add
            </button>
            <div className="list">
            <ul style={{listStyleType:"circle"}}>
               { console.log(this.state.todos,"<<<")}
                   { this.state.todos.map((todo,index)=>{
                        return(
                        <li key={index}>
                            {todo}
                            <button className="removeButton" onClick={()=>{this.removeList(index)}}>Remove</button>
                        </li>
                        );

                    })

                }
                
            </ul>
            </div>
            </div>
            </div>
       
    </>)
    }
}

export default TodoList;

