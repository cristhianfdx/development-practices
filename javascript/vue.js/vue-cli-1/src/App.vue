<template>
  <div id="app" class="container">
    <Cabecera/>
    <lista/>         
  </div>
</template>

<script>
import Cabecera from './components/Cabecera.vue';
import Lista from './components/Lista.vue';

export default {
  name: 'app',
  components: {
    Cabecera,
    Lista
  }
}
</script>

<style>

</style>
