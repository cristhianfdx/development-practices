import Express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';

import indexRoutes from './routes/index_routes';
import postsRoutes from './routes/postsRoutes';
import userRoutes from './routes/usersRoutes';
import {ConnectionDB} from './db_connection';

class Server{

    public app: Express.Application;
    public conexDB: ConnectionDB;

    constructor() {
        this.app = Express();
        this.conexDB = new ConnectionDB();
        this.config();
        this.routes();
    }

    config() {
        //Database
        this.conexDB.getConnection();            
        //Settings
        this.app.set('port', process.env.PORT || 3000);
        //Middlewares
        this.app.use(morgan('dev'));
        this.app.use(Express.json());
        this.app.use(Express.urlencoded({extended: false}));
        this.app.use(helmet());
        this.app.use(compression());
        this.app.use(cors());
    }

    routes() {
        this.app.use('/', indexRoutes);
        this.app.use('/api/posts', postsRoutes);
        this.app.use('/api/users', userRoutes);
    }

    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}

new Server().start();
