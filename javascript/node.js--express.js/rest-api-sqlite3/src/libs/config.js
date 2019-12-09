module.exports = {
    database: 'tasks',
    username: '',
    password: '',
    params: {
        dialect : 'sqlite',
        storage: 'tasks-db.sqlite',
        define : {
            underscored: true
        },
        operatorAliases: false
    }
};