<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="danger">
      <b-container>
        <b-navbar-brand :to="{name: 'home'}">NavBar</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse is-nav id="nav-collapse">
          <b-navbar-nav>
            <b-nav-item :to="{name: 'home'}" exact>Home</b-nav-item>
            <b-nav-item :to="{name: 'about'}">About</b-nav-item>
            <b-nav-item :to="{name: 'grid'}">Grid</b-nav-item>
            <b-nav-item :to="{name: 'card'}">Card</b-nav-item>
            <b-nav-item :to="{name: 'form'}">Form</b-nav-item>                
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>

    <b-container>
      <router-view/>
    </b-container>    
  </div>
</template>

<style>
</style>
