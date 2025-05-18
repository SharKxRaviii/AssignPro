import express from 'express';
import cors from 'cors';
import { errorHandlerMiddleware } from './src/middlewares/errorHandler.middleware.js';
import agentRoutes from './src/features/agent/agent.routes.js';
import userRoutes from './src/features/user/user.routes.js';
import uploadRoutes from './src/features/upload/upload.routes.js';
import { jwtAuth } from './src/middlewares/jwtAuth.middleware.js';

const app = express();

// parsing JSON bodies
app.use(express.json());

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

app.use('/api/users', userRoutes);
app.use('/api/agents', jwtAuth, agentRoutes);
app.use('/api/files', jwtAuth, uploadRoutes)

app.use(errorHandlerMiddleware);
export default app;