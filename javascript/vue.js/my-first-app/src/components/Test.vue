<template>
    <div id="test">
        <!--<div v-html="codHTML"></div> 
        <div v-if="showName">
            No se puede mostrar
        </div>
        <div v-else>
            Si se puede mostrar
        </div>

        <div>
            <ul>
                <li v-for="t in task">
                    {{t.title}}
                </li>
            </ul>
        </div>  -->
        <!-- <input type="text" v-model="user.name" placeholder="Ingrese nombre">
        <button v-on:click="saludar(user.name)">CLICK ME</button> -->
        <!--<input type="text" v-on:keyup.enter="typing">-->
        <div>{{msg}}</div>
    </div>    
    

</template>

<script>

    export default{
        data(){
            return{
                title:'Hola Vue.js',
                val: 1989,
                user:{
                    name:'Cristhian',
                    lastname:'Forero'
                },
                codHTML: '<h3>Hola Vue.js</h3>',
                showName: false,
                task:[
                    {title: 'eat'},
                    {title: 'dinner'}
                ]               

            }
        },
        methods:{
            saludar(name){
                alert("Hola" +" "+ name);
            },

            typing(e){
                console.log(e.target.value);                
            }
        },
        computed:{
            fullName(){
                return this.user.name + " "+ this.user.lastname;
            }
        },
        props:{
            msg:{
                type: String,
                default: "Prueba"
            }
        }
        
    }
   
</script>

<style media="screen">
    #test{
        background-color: gray; 
    }
</style>
