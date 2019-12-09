<template>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">{{articulo.title}}</h3>
                <p class="small"> Autor: {{nombre}}</p>
                <p>{{articulo.body}}</p>
                <nuxt-link to="/blog" class="btn btn-primary">Atrás</nuxt-link>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data(){
        return{
           
        }
    },
    async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
        try {
            
            const resultado = await axios.get(
                `https://jsonplaceholder.typicode.com/posts/${params.id}`);
            const usuario = await axios.get(
                `https://jsonplaceholder.typicode.com/users/${resultado.data.userId}`);
            const articulo = resultado.data;
            const nombre = usuario.data.name;
            
            return {articulo, nombre};

        } catch (error) {
            return {error};
        }
    }
}
</script>