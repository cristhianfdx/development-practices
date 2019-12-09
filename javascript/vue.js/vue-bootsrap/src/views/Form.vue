<template>
  <div class="mt-5">
    <b-form>
      <b-row>
        <b-col md="3">
          <b-form-input type="text" v-model="texto" :state="comprobar"></b-form-input>
          <small v-if="!comprobar">Minímo 3 cáracteres</small> <br>
          <span>Texto: {{texto}}</span>
        </b-col>
        <b-col md="3">
          <b-form-select v-model="select" :options="animales"></b-form-select> <br> <br>
          <span>Selección: {{select}}</span>
        </b-col>
        <b-col md="3">
          <b-form-radio-group v-model="radio" :options="animalesRadio"></b-form-radio-group> <br>
          <span>Radio: {{radio}}</span>
        </b-col>
        <b-col md="3">
          <b-form-checkbox-group v-model="check" :options="animalesCheck"></b-form-checkbox-group> <br>
          <span v-if="check.length !== 0">Check: {{check}}</span>
        </b-col>
      </b-row>
    </b-form>    
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      texto: "",
      select: null,
      radio: null,
      check: [],
      animales: [
        { value: null, text:'seleccione animal'},
        { value: 'Pato', text: 'Pato'},
        { value: 'Perro', text: 'Perro'},
        { value: 'Gato', text: 'Gato'}
      ],
      animalesRadio: [
        { value: 'Pato', text: 'Pato'},
        { value: 'Perro', text: 'Perro'},
        { value: 'Gato', text: 'Gato'}
      ],
      animalesCheck: [
        { value: 'Pato', text: 'Pato'},
        { value: 'Perro', text: 'Perro'},
        { value: 'Gato', text: 'Gato'}
      ]
    };
  },
  computed: {
    comprobar() {
      return this.texto.length > 2 ? true : false;
    }
  }
};
</script>
