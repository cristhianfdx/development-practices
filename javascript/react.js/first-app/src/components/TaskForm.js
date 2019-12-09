import React, { Component } from 'react';


class TaskForm extends Component{
    constructor(){
        super();
        this.state={
            title: '',
            responsible : '',
            description : '',
            priority: 'low'
        };

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e){
        const {value, name} = e.target;
        this.setState({
            [name] : value

        });
        console.log(this.state);      
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.onAddTask(this.state);
        
    }

    render(){
        return(
            <div className="card">
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input onChange={this.handleInput} type="text" name="title" className="form-control" placeholder="Title"/>
                    </div>
                    <div className="form-group">
                        <input onChange={this.handleInput} type="text" name="responsible" className="form-control" placeholder="Responsible"/>
                    </div>
                    <div className="form-group">
                        <textarea onChange={this.handleInput} type="text" name="description" className="form-control" placeholder="Description">
                        </textarea>
                    </div>
                    <div className="form-group">
                        <select className="form-control" name="priority" onChange={this.handleInput}>
                            <option>low</option>
                            <option>medium</option>
                            <option>hight</option>
                        </select>
                    </div>

                    <button className="btn btn-primary">Save</button>

                </form>
            </div>

        )
    }
}

export default TaskForm;