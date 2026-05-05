import cors from 'cors';
import express, { Application } from 'express';
import morgan from 'morgan';
import rootRouter from './routes';
import notFound from './middlewares/notFound';
import globalErrorHandler from './middlewares/globalErrorhandler';

const app: Application = express();

app.use(express.json());
app.use(morgan('dev'));

app.use(cors({ origin: ['http://localhost:5173', 'https://inventory-navy.vercel.app'] }));

// application routes
app.use('/api/v1', rootRouter);
app.get('/test', (req, res) => {  
    res.json({ message: 'Test route is working!' });
});
app.use(notFound);
app.use(globalErrorHandler);


export default app;