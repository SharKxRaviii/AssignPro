import express from 'express';
import { addAgent, allAgents } from './agent.controller.js';

const agentRoutes = express.Router();

agentRoutes.get('/', allAgents);
agentRoutes.post('/', addAgent);
export default agentRoutes;