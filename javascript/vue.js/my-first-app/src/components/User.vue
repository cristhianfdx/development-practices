<template>
    
    <div class="users">
        <h1>User Component</h1>

        <ul>
            <li v-for="user in users" v-bind:key="user">
                {{user.name}} - {{user.email}} <button v-on:click="deleteUser(user)">delete</button>
            </li>
        </ul>

        <form v-on:submit.prevent="agregar">
            <label for="name">Nombre:</label>
            <input type="text" name="name" id="name" v-model="newUser.name"> <br><br>
            <label for="email">Email:</label>
            <input type="email" name="email" id="email" v-model="newUser.email"><br><br>
            <button type="submit">Add</button>
        </form>
    </div>
    
</template>

<script>
    export default{
        data(){
            return{
                users:[
                    {
                        name:"Cristhian",
                        email:"cf@.com",
                        contacted: false
                    },
                    {
                        name:"Alexander",
                        email:"af@.com",
                        contacted: true 
                    }
                ],
                newUser: {

                        name:"",
                        email:""
                    }
            }
        },
        methods:{
            agregar(){
                this.users.push(this.newUser);
                this.newUser ={};
                
            },
            deleteUser(user){
                this.users.splice(this.users.indexOf(user), 1);
            }
        },
        created() {
            this.$http.get("https://jsonplaceholder.typicode.com/users")
            .then(res => this.users = res.body);
        },
    }
</script>

<style>
    .users{
        background: darkblue;
        color: aliceblue;
    }
</style>
