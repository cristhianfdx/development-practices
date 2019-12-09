module.exports={
    database: 'tasks',
    username: '',
    password: '',
    params: {       
        dialect: 'sqlite',        
        storage : 'tasks-db.sqlite', //Solo para SQLite
        define: { underscore: true },
        operatorsAliases: false
    }
};