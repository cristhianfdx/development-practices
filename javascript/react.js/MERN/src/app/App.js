import React, {Component} from 'react';


class App extends Component{
    

    constructor(){
        super();
        this.state={
            _id: "",
            title : "",
            description : "",
            tasks: [],
            url: "/api/tasks",
            editable : false            
        };        
    }

    addTask(e){
        
        if(this.state._id){
            fetch(`${this.state.url}/${this.state._id}`, {
                method: "PUT",
                body: JSON.stringify({
                    title: this.state.title,
                    description: this.state.description
                }),
                headers:{
                    'Accept' : 'application/json',
                    'Content-Type': 'application/json' 
                }

            }).then(res=> res.json())
            .then(data=>{
                window.M.toast({html: "Task updated", classes:"rounded indigo"});
                this.setState({_id: '', title: '', description: '', editable: false});
                this.getTasks();
            }).catch(err=>{console.log(err)});

        }else{
            fetch(this.state.url, {
                method: "POST",
                body : JSON.stringify({
                    title: this.state.title,
                    description: this.state.description
                }),
                headers:{
                    'Accept' : 'application/json',
                    'Content-Type': 'application/json' 
                }
                
            }).then(res => res.json())
            .then(data=>{
                console.log(data);
                window.M.toast({html:"Task saved", classes: 'rounded indigo'});
                this.setState({title: "", description: ""});                
                this.getTasks();
            })
            .catch(err=> {
                console.log(err);                          
            });
        }

        e.preventDefault();       
    }

    componentDidMount(){
        this.getTasks();
    }

    deleteTask(id){        
        if(confirm("Are you sure you want to delete it?")){
            fetch(`${this.state.url}/${id}`, {
                method : "DELETE",
                headers:{
                    'Accept' : 'application/json',
                    'Content-Type': 'application/json' 
                }
            }).then(res=> res.json())
            .then(data=>{
                M.toast({html:"Task deleted", classes: 'rounded indigo'});
                this.getTasks();
    
            }).catch(err=> console.log(err))
        }
    }

    handleChange(e){
        const {name, value} = e.target;
        this.setState({
            [name] : value
        });
    }

    getTasks(){
        fetch(this.state.url, {
            method: "GET"
        }).then(res=> res.json())
        .then(data=> {           
            this.setState({tasks : data});            
        });
    }

    editTask(id){
        fetch(`${this.state.url}/${id}`,{
            method : "GET"
        }).then(res=> res.json())
        .then(data=>{
            this.setState({
                _id: data._id,
                title: data.title,
                description: data.description,
                editable: true                
            })            
        }).catch(err=> console.log(err));
        
    }

    render(){
        const isEditable = this.state.editable;
        let button;

        if(isEditable){
            button = <button type="submit" className="btn waves-effect waves-light indigo ">
                        Actualizar
                        <i className="material-icons right">send</i>
                    </button>
            
        }else{
            button = <button type="submit" className="btn waves-effect waves-light indigo ">
                        Crear
                        <i className="material-icons right">send</i>
                    </button>
        }

        return(
            <div>
                {/*Navigation */}
                <nav className="indigo ">
                    <div className="container">
                    <a href="/" className="brand-logo">CRUD</a>
                    </div>
                </nav>

                <div className="container">

                    <div className="row">
                        <div className="col s12 m5">
                            <div className="card">
                                <div className="card-content">
                                    <form onSubmit={this.addTask.bind(this)}>

                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input type="text" id="task-title" name="title" autoFocus 
                                                onChange={this.handleChange.bind(this)} value={this.state.title}
                                                placeholder="Título de la Tarea"/>
                                                
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <textarea type="text" id="txt-description" name="description" 
                                                    className="materialize-textarea" 
                                                    onChange={this.handleChange.bind(this)} value={this.state.description}
                                                    placeholder="Descripción">
                                                </textarea>                                                                                               
                                            </div>
                                        </div>
                                        {button}
                                     </form>
                                </div>
                            </div>
                        </div>

                        <div className="col s12 m7">
                            <table>
                                <thead>
                                    <tr>
                                        <th>T&iacute;tulo</th>
                                        <th>Descripci&oacute;n</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.tasks.map((task)=>{
                                            return(
                                                <tr key={task._id}>
                                                    <td>{task.title}</td>
                                                    <td>{task.description}</td>
                                                    <td>
                                                        <button className="btn waves-effect waves-light red darken-1" 
                                                                onClick={this.deleteTask.bind(this, task._id)}
                                                        >
                                                            <i className="material-icons">delete</i>
                                                        </button>
                                                        &nbsp;                                                        
                                                        <button className="btn waves-effect waves-light  blue accent-4" 
                                                                
                                                                onClick={this.editTask.bind(this, task._id)}
                                                        >
                                                            <i className="material-icons">edit</i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            )                                        
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>                
               
            </div>
              
        )
    }
}

export default App;