import express from 'express';
import { addAgent } from './agent.controller.js';

const agentRoutes = express.Router();

agentRoutes.post('/', addAgent);

export default agentRoutes;