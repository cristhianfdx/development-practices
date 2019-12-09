const app = new Vue({
    el: '#app',
    data:{
        title: "Vue Models",
        frutas: [
            { nombre: "Kiwi", cantidad: 0 },
            { nombre: "Manzana", cantidad: 3 },
            { nombre: "Pera", cantidad: 6 }
        ],
        nuevaFruta: "",
        total: 0
    },
    methods:{
        agregarFruta(){
            if(this.nuevaFruta !== ""){
                this.frutas.push({
                    nombre : this.nuevaFruta,
                    cantidad: 0
                    
                });
                this.nuevaFruta = "";
            }
            
        }
    },
    computed:{
        sumarFrutas(){
            this.total = 0;
            for(fruta of this.frutas){
                this.total += fruta.cantidad;
            }
            return this.total;
        }
    }
});