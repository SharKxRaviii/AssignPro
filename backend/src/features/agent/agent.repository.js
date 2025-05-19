import agentModel from "./agent.schema.js";
import bcrypt from 'bcrypt';

export const createAgent = async (name, email, mobile, password) => {
    try {
        const hashedPass = await bcrypt.hash(password, 12);
        const newAgent = new agentModel({name, email, mobile, password: hashedPass});
        const savedAgent = await newAgent.save();
        return {
            success: true,
            res: savedAgent
        }
    } catch (error) {
        return {
            success: false,
            error: {
                statusCode: 500,
                msg: error.message
            }
        }
    }
}

export const getAllAgents = async () => {
    try {
        const allAgents = await agentModel.find();
        return {
            success: true,
            res: allAgents
        }
    } catch (error) {
        return {
            success: false,
            error: {
                statusCode: 500,
                msg: error.message
            }
        }
    }
}