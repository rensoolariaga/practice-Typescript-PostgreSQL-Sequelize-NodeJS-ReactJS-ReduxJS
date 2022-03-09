// import the type Application for asign the type for express
// import the types Request, Response, NextFunction for manipulate the functions
import express, {Application, Request, Response, NextFunction } from 'express';
const app: Application = express();
import config from './lib/config';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import cors from 'cors';

// import the routes for asign to express
import routes from './routes/index';

// i create a interface for the case error and send him to the function 
interface IExpressError {
    status: number;
    message: string;
};

app.use(express.urlencoded({extended: true, limit: '50mb'})); //middleware
app.use(express.json({limit: '50mb'}));
app.use(cookieParser());
app.use(morgan('dev'));

app.use(
	cors({
		origin: config.cors,
		credentials: true,
		methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
		allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
	})
);

// asign the types for params of the function 
app.use((err: IExpressError, req: Request, res: Response, next:NextFunction) => {
	// eslint-disable-line no-unused-vars
	const status = err.status || 500;
	const message = err.message || err;
	console.error(err);
	res.status(status).send(message);
});

// asign the routes for the url localhost:3001/api
app.use('/api', routes);
export default app;