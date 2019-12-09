<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-primary">
      <div class="container">
        <a href="/" class="navbar-brand">Vue.js Firebase CRUD</a>
      </div>
    </nav>
    <div class="container">
      <div class="row mt-5">
        <div class="col-sm-4">
          <div class="card">
            <div class="card-header">
              <h3>Add a new Website</h3>
            </div>
            <div class="card-body">
              <form @submit.prevent="addWebsite">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Name"
                    autofocus
                    v-model="website.name"
                  >
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Author"
                    autofocus
                    v-model="website.author"
                  >
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="URL"
                    autofocus
                    v-model="website.url"
                  >
                </div>
                <button class="btn btn-success btn-block" type="submit" 
                  v-if="website.id ? btnText='Update': btnText='Save'">{{btnText}}</button>
              </form>
            </div>
          </div>
        </div>
        <div class="col-sm-8 text-center">
          <img alt="Vue logo" src="./assets/logo.png">
          <div class="card">
            <div class="card-header">Websites List</div>
            <div class="card-body">
              <table class="table table-striped table-bordered">
                <thead class="bg-success text-light">
                  <tr>
                    <th>Name</th>
                    <th>Author</th>
                    <th>Operations</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(web, index) of websites" :key="index">
                    <td>
                      <a :href="web.url" target="_blank">{{web.name}}</a>
                    </td>
                    <td>{{web.author}}</td>
                    <td>
                      <button class="btn btn-danger btn-sm" @click="deleteWebsite(web.id)">Delete</button> &nbsp;
                      <button class="btn btn-info btn-sm" @click="editWebsite(web)">Edit</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { db } from "./database";
const websitesRef = db.ref("websites");

export default {
  name: "app",
  components: {},
  data() {
    return {
      websites: [],
      website: {
        name: "",
        author: "",
        url: ""
      },
      btnText: ''
    };
  },
  methods: {
    addWebsite() {
      try {
        if( this.btnText === 'Save'){
          websitesRef.push(this.website);
          this.$toastr.success('Website created'); 
        }else{
          this.updateWebsite(this.website.id);           
        }        
        this.website = {};
      } catch (error) {
        console.error(error);
      }
    },
    deleteWebsite(id) {
      if(confirm('Are you sure to delete')){
        websitesRef.child(id).remove();
      }      
    },
    editWebsite(web){
      this.website = Object.assign({}, web);        
    },
    updateWebsite(id){
      websitesRef.child(id).update(this.website);     
    }
  },
  mounted() {
    // Add Event
    websitesRef.on("child_added", snapshot => {
      this.websites.push({ ...snapshot.val(), id: snapshot.key });           
    });
    // Remove Event
    websitesRef.on("child_removed", snapshot => {
      const website = this.websites.find(w => w.id === snapshot.key);
      const index = this.websites.indexOf(website);
      this.websites.splice(index, 1);
      this.$toastr.success('Website removed');
    });
    // Update Event
    websitesRef.on('child_changed', snapshot => {
      const website = this.websites.find(w => w.id === snapshot.key);
      const index = this.websites.indexOf(website);
      this.websites.splice(index, 1, this.website);
      this.$toastr.success('Website updated');
    });
  }
};
</script>

<style>
</style>
