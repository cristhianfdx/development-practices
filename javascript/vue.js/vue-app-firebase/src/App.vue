<template>
  <div id="app" class="container">
    <h1>Vue and Firebase</h1>

    <div class="card">
      <div class="card-header">
        <h3 class="card-title">Add A Link</h3>        
      </div>

      <hr>

      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Links List</h3>
        </div>
      </div>

      <div class="card-body">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>User</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="lk in links" key="links.id">
              <td><a v-bind:href="lk.url" target="_blank">{{lk.title}}</a></td>
              <td>{{lk.author}}</td>
              <td><button class="btn btn-danger" v-on:click="deleteLink(lk)"><i class="fa fa-trash-o" aria-hidden="true"></i></button></td>
            </tr>           
          </tbody>
        </table>
      </div>

      <div class="card-body">

        <form v-on:submit.prevent="addLink" class="form-inline">

          <div class="form-group">
            <input type="text" placeholder="Title" v-model="newLink.title" class="form-control">            
          </div>
          &nbsp; &nbsp; &nbsp;
          <div class="form-group">
            <input type="text" placeholder="Author" v-model="newLink.author" class="form-control">            
          </div>
          &nbsp; &nbsp; &nbsp;
          <div class="form-group">
            <input type="text" placeholder="Url" v-model="newLink.url" class="form-control">
          </div>
          &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
          <input type="submit" value="ADD A LINK" class="btn btn-success">          

        </form>

      </div>
    </div>
  
  </div>
</template>

<script>
import Firebase from 'firebase'
import Toastr from 'toastr'

let config ={
    apiKey: "AIzaSyBKeIoZ9m_0MUjrg_xpCQtG8-ofHc9vg5k",
    authDomain: "proyectlinksvue.firebaseapp.com",
    databaseURL: "https://proyectlinksvue.firebaseio.com",
    projectId: "proyectlinksvue",
    storageBucket: "proyectlinksvue.appspot.com",
    messagingSenderId: "944212221079"
};

let app = Firebase.initializeApp(config);
let db = app.database();

let linksRef = db.ref('links');

export default {
  name: 'App',
  firebase:{
    links: linksRef
  },
  data(){
    return{
      newLink:{
        title:'',
        author:'',
        url:''
      }
    }
  }, 
  methods:{

    addLink: function(){
      linksRef.push(this.newLink);
      this.newLink.title = "";
      this.newLink.author= "";
      this.newLink.url= "";
    },

    deleteLink:function(link){
      linksRef.child(link['.key']).remove();
      Toastr.success("Link Remove");
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
