import express, { Application } from 'express';
import { connect } from './infra/database';
import { errorMiddleware } from './middlewares/error.middleware';

class App {

    public app: Application;
    constructor() {
        this.app = express();
        this.middlewaresInitialize();
        this.initializeRoutes();
        this.interceptionError();
        connect();
    }

    initializeRoutes() {
        //this.app.use('/', )
    }

    interceptionError() {
        this.app.use(errorMiddleware)
    }

    middlewaresInitialize() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    listen() {
        this.app.listen(8000, () => console.log('O servidor está rodando'));
    }
}

export { App };