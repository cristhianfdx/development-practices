import express from 'express';
import morgan from 'morgan';
import expresshbs from 'express-handlebars';
import path from 'path';

import indexRoutes from './routes';
import taskRoutes from './routes/tasks';

export default class Application{

    app: express.Application;

    constructor(){
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings(){
        this.app.set('port', process.env.PORT || 3000);
        this.app.set('views', path.join(__dirname, 'views'));
        this.app.set('views', path.join(__dirname, 'views'));
        this.app.engine('.hbs', expresshbs({
            layoutsDir: path.join(this.app.get('views'), 'layouts'),
            partialsDir: path.join(this.app.get('views'), 'partials'),
            defaultLayout: 'main',
            extname: '.hbs'
        }));
        this.app.set('view engine', '.hbs');
    }

    middlewares(){
        this.app.use(morgan('dev'));
        this.app.use(express.urlencoded({extended : false}));
        this.app.use(express.json());
    }

    routes(){
        this.app.use('/', indexRoutes);
        this.app.use('/tasks', taskRoutes)
        this.app.use(express.static(path.join(__dirname, 'public')));
    }

    start(){
        const port = this.app.get('port');
        this.app.listen(port, ()=>{
            console.log("Server on port", port);
        });
    }

}