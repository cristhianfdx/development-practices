<template>
  <div>
    <ul class="list-group" v-for="(fruta, index) of ordenado" :key="fruta.id">
      <li class="list-group-item d-flex justify-content-between align-items-center" 
        @click="aumentar(index)">
        {{fruta.nombre}}
        <span class="badge badge-primary badge-pill">{{fruta.cantidad}}</span>
      </li>      
    </ul>
    <button class="btn btn-danger btn-block mt-3" @click="reiniciar">Reiniciar</button>  
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: "Lista",
  methods: {
    ...mapMutations(['aumentar', 'reiniciar'])
  },
  computed: {
    ...mapState(['frutas']),
    ordenado(){
        return this.frutas.sort((a, b)=> b.cantidad - a.cantidad);
    }      
  }
};
</script>