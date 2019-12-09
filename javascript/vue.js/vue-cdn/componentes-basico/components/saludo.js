Vue.component('saludo', {
    template: //html
     `
        <div>
            <h1>{{saludo}}</h1>
            <h3>Test</h3>
        </div>
        
    `,
    data(){
        return{
            saludo: "Hola vue.js"
        }
    }
});