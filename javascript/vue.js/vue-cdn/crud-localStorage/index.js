new Vue({
    el: "#app",
    data:{
        titulo: "CRUD LocalStorage Vue.js",
        tareas: [],
        nuevaTarea: ""
    },
    methods: {
        agregarTarea(){
            if(this.nuevaTarea !== ""){
                this.tareas.push({
                    nombre: this.nuevaTarea,
                    estado: false
                });
                localStorage.setItem('vue_crud', JSON.stringify(this.tareas));
                this.nuevaTarea = "";
            }            
        }, 
        editarTarea(index){
            this.tareas[index].estado = true;
            localStorage.setItem('vue_crud', JSON.stringify(this.tareas));
        },
        eliminarTarea(index){
            this.tareas.splice(index, 1);
            localStorage.setItem('vue_crud', JSON.stringify(this.tareas));
        }
    },
    created(){
       let db = JSON.parse(localStorage.getItem('vue_crud'));
       if(db === null){
           this.tareas= [];
       }else{
           this.tareas = db;
       } 
    }
})