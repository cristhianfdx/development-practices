import express, {json} from 'express';
import morgan from 'morgan';

import '@babel/polyfill';

//Import Routes
import projects from './routes/projects.route';
import tasks from './routes/tasks.route';

//Initializations
const app = express();

//Middlewares
app.use(morgan('dev'));
app.use(json());

//Routes
app.use('/api/projects', projects);
app.use('/api/tasks', tasks);


export default app;
