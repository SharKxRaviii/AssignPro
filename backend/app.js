import express from 'express';
import cors from 'cors';
const app = express();
import { errorHandlerMiddleware } from './src/middlewares/errorHandler.middleware.js';
// implement cors
const corsOptions = {
    origin: 'http://localhost:5173',
    method: 'GET, POST, PUT, DELETE',
    allowedHeaders: 'Content-Type, Authorization'
};
app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.send('welcome');
});

app.use(errorHandlerMiddleware);
export default app;