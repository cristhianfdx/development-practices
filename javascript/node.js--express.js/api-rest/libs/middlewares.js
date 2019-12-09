import bodyParser from 'body-parser';

module.exports = app =>{
    
    app.set('json spaces', 4);
    app.set('port', process.env.PORT || 3000);
    app.set(bodyParser.json());
    app.set(bodyParser.urlencoded({extended:false}));
}