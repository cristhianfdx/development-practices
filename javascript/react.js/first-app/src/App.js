/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { tasks } from './all.json';
import TaskForm from './components/TaskForm';

class App extends Component {
  
  constructor(){
    super();
    this.state={
      tasks
    }

    this.handleAddTask = this.handleAddTask.bind(this);
    //this.handleRemoveTask = this.handleRemoveTask.bind(this);
  }

  handleAddTask(task){
    this.setState({
      tasks:[...this.state.tasks, task]
    })
  }

  handleRemoveTask(task){

    if(window.confirm("Are you sure you want to delete it?")){
      this.setState({
        tasks : this.state.tasks.filter((elements, i)=>{
          return i !== task;
        })
      });
    }
    
  }

  render() {

    const task = this.state.tasks.map((task, i) => {
      return(        
        <div key={i} className="col-md-4">
          <div className="card mt-4">
            <div className="card-header">
              <h3>{task.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {task.priority}
              </span>
            </div>
            <div className="card-body">
              <p>{task.description}</p>
              <p><mark>{task.responsible}</mark></p>
            </div>
            <div className="card-footer">
              <button className="btn btn-danger" onClick={this.handleRemoveTask.bind(this, i)}>Delete</button>
            </div>
          </div>
        </div>        
      )
    });
    
      return (
      <div className="App">
        <header className="App-header">         
          <nav className="navbar navbar-dark bg-dark">
            <a href="#" className="text-white">
              Task
              <span className="badge badge-pill badge-light ml-2">
                {this.state.tasks.length}
              </span>
            </a>                
          </nav>     
        </header>

       
        <div className="container">      
                   
          <div className="row mt-4">
            <div className="col-md-4 text-center">
              <img src={logo} className="App-logo" alt="logo" />
              <TaskForm onAddTask={this.handleAddTask}/> 
            </div>

            <div className="col-md-8">
              <div className="row">
              {task}
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
