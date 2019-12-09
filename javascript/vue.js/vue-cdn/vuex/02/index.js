// Components
Vue.component('Counter', {
    template: `
    <div class="ex1">
        <h2>Vuex</h2>
        <p>{{a.count}}</p>
        <p>
            <button @click="increment">+</button>
            <button @click="decrement">-</button>
        </p>
        <br><br>
        {{doneTodosCount}}
        <br> <br>
        <button @click="getUsers">Get Users</button> <br>
        <ul v-for="(user, index) of c.users" :key="index">
            <li>{{user.name}}</li>
        </ul>
        
    </div>
    `,
    computed: {
        ...Vuex.mapState(['a', 'c']),
        ...Vuex.mapGetters(['doneTodosCount', 'filterUsers'])
    },
    methods: {
        ...Vuex.mapMutations(['increment', 'decrement']),
        ...Vuex.mapActions(['getUsers'])
    }
});

// Modules

const ModA = {
    namespace: true,
    state:{
        count: 0
    },
    mutations:{
        increment(state) {
            state.count++;
        },
        decrement(state) {
            state.count--;
        }
    },
    getters:{ },
    actions:{ },
    strict: true
}

const ModB = {
    namespace: true,
    state:{
        todos: [
            { id: 1, text: '...', done: true },
            { id: 2, text: '...', done: false }
        ],
    },
    mutations:{ },
    getters:{
        doneTodosCount: (state, getters) => {
            return state.todos.filter(todo => todo.done);
        }
    },
    actions:{ },
    strict: true
}

const ModC = {
    namespace: true,
    state:{
        users: []
    },
    getters: {
        filterUsers(state, getters) {
            let result = [];

            state.users.forEach(user => {
                result.push(user.name);
            });

            return result;
        }
    },
    mutations: {        
        listUsers(state, allUsers) {
            state.users = allUsers;
        }
    },
    actions: {
        async getUsers({
            commit
        }) {
            const data = await fetch('https://jsonplaceholder.typicode.com/users');
            const allUsers = await data.json();
            commit('listUsers', allUsers)
        }
    },
    strict: true
}


// Store

const store = new Vuex.Store({
    modules:{
        a: ModA,
        b: ModB,
        c: ModC
    }
});

new Vue({
    el: "#app",
    store
});