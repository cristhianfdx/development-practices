<template>
  <div>
    <v-layout :wrap="true">
      <v-flex xs12>
        <v-card>
          <v-date-picker 
          v-model="fecha" 
          full-width 
          locale="es-co" 
          :min="minimo" 
          :max="maximo"
          @change="getDolar(fecha)"></v-date-picker>
        </v-card>
        <v-card color="error" dark>
          <v-card-text class="display-1 text-xs-center">{{valor}}</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import axios from "axios";
import {mapMutations} from 'vuex';

export default {
  data() {
    return {
      fecha: new Date().toISOString().substr(0, 10),
      minimo: "1984",
      maximo: new Date().toISOString().substr(0, 10),
      valor: null
    };
  },
  methods: {
    async getDolar(dia) {
      let f = dia.split('-').reverse().join('-');
      try{
        this.mostrarLoading({titulo: "Accediendo a la información"})        
        let datos = await axios.get(`https://mindicador.cl/api/dolar/${f}`);
        if(datos.data.serie.length > 0){
          
          this.valor = await ((datos.data.serie[0].valor)*4.67).toFixed(2);
        }else{
          this.valor = "Sin resultados"
        }
        
      }catch(err){
        console.error(err);
      }finally{
        this.ocultarLoading();
      }      
      
    },
    ...mapMutations(['mostrarLoading', 'ocultarLoading'])
  },
  created() {
    this.getDolar(this.fecha);
  }
};
</script>
