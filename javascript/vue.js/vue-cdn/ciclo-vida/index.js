new Vue({
    el: "#app",
    data: {
       mensaje: "Hola Vue.js" 
    },
    beforeCreate() {
     console.log("before created");   
    },
    created() {
        console.log("created");
    },
    beforeMount() {
        console.log("mount");
    },
    mounted() {
        console.log("mounted")
    },
    beforeUpdate() {
        console.log("before update")
    },
    updated() {
        console.log("update")
    },
    beforeDestroy() {
        console.log("before destroy")
    },
    destroyed() {
        console.log("destroyed");
    },
    methods: {
        destruir(){
            this.$destroy()
        }
    },
    

});