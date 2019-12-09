<template>
    <div class="container">
       <div class="card my-2" v-for="(articulo, index) of articulos" :key="index">
           <div class="card-body">
               <nuxt-link :to="`/blog/${articulo.id}`">
                   <h3 class="card-title">{{articulo.title}}</h3>                   
               </nuxt-link>
               <p>
                    {{articulo.body}}
                </p>
           </div>
       </div>
    </div>
</template>

<script>
import axios from  'axios';

export default {
    data(){
        return{
            articulos: []
        }
    },
    async created() {
        try {
            const resultado = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
            this.articulos = resultado.data;
        } catch (error) {
            console.error(error);
        }
    },
    methods: {
        
    }
}
</script>