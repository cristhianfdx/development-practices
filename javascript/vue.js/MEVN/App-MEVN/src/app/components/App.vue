<template>

    <div>
        <nav class="navbar navbar-light bg-light">
            <a href="/" class="navbar-brand">MEVN STACK</a>
        </nav>

        <div class="container">
            <div class="row pt-5">
                <div class="col-md-5">
                    <div class="card">
                        <div class="card-body">
                            <form @submit.prevent="sendTask">
                                <div class="form-group">
                                    <input type="text" placeholder="Insert a task" class="form-control"  v-model="task.title">
                                </div>
                                <div class="form-group">
                                    <textarea id="txt" cols="30" rows="10" class="form-control" v-model="task.description"></textarea>
                                </div>
                                <template v-if="edit ===false">
                                    <button class="btn btn-block btn-primary">SEND</button>
                                </template>
                                <template v-else>
                                    <button class="btn btn-block btn-primary">UPDATE</button>
                                </template>                                
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-md-7">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>Task</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="t of tasks" v-bind:key="t._id">
                                <td>{{t.title}}</td>
                                <td>{{t.description}}</td>
                                <td><button class="btn btn-danger" @click="deleteTask(t._id)">Delete</button></td>
                                <td><button class="btn btn-info" @click="editTask(t._id)">Edit</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>                
            </div>
        </div>
    </div>
    
</template>

<script>

    class Task{
        constructor(title, description){
            this.title = title;
            this.description = description;
        }
    }

    export default{
        data(){
            return{
                task: new Task(),
                tasks :[],
                edit: false,
                taskToEdit : ''
            }
        },
        created() {
            this.getTask();
        },
        methods:{
            getTask(){
                fetch('/api/tasks', {
                    method :'GET'
                })
                .then(res=> res.json())
                .then(data=> {
                        this.tasks=data;                        
                })
            },
            sendTask(){

                if(this.edit){
                    fetch('/api/tasks/' + this.taskToEdit, {
                        method : 'PUT',
                        body : JSON.stringify(this.task),
                        headers:{
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                        }
                    })
                    .then(res=> res.json())
                    .then (data=>{
                        console.log(data);
                        this.edit = false;
                        this.getTask();
                    });

                }else{
                    fetch('/api/tasks',{
                        method : 'POST',
                        body: JSON.stringify(this.task),
                        headers :{
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            }
                    })
                        .then(res=> 
                            res.json()
                        )
                        .then(data=>
                            console.log(data)
                        )
                }                

                this.task= new Task();
                this.getTask();
            },
            deleteTask(id){
                fetch('/api/tasks/'+ id,{
                    method: 'DELETE',
                    headers : {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                })
                .then(res=> res.json())
                .then(data=> {
                    console.log(data);
                    this.getTask();
                })
            },
            editTask(id){
               fetch('/api/tasks/' + id, {
                   method : 'GET'
               })
               .then(res=> res.json())
               .then(data=>{
                   this.task = new Task(data.title, data.description);
                   this.taskToEdit = data._id;
                   this.edit = true;
               });               
            }            
        }        
    }
    
</script>

<style lang="css">
    #txt{
        resize: none
    }
</style>