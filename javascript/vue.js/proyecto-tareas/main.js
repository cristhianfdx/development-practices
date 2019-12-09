new Vue({
    el:'#taskApp',
    data:{
        nameApp: 'Tareas Vue.js',
        tareas:[
            {
                titulo:'tarea1',
                hecho: false 
            },
            {
                titulo:'tarea2',
                hecho: false 
            },
            {
                titulo:'tarea3',
                hecho: false 
            },
            {
                titulo:'tarea4',
                hecho: false
            }
        ]
    },
    methods:{
        agregarTarea: function(e){
            e.preventDefault();
            this.tareas.push({
                titulo : this.tareas.titulo,
                hecho : false
            });

            this.tareas.titulo ="";
        },

        eliminarTarea: function(tarea) {
            this.tareas.splice(
                this.tareas.indexOf(tarea),
                1
            );
        }
    }
});