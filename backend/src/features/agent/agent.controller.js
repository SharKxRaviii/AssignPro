import { createAgent, getAllAgents } from "./agent.repository.js";
import ErrorHandler from "../../middlewares/errorHandler.middleware.js";

export const addAgent = async (req, res) => {
    const {name, email, mobile, password} = req.body;

    if (!name || !email || !mobile || !password) {
        throw new ErrorHandler("All fields are required", 400);
    }

    try {
        const newAgent = await createAgent(name, email, mobile, password);
        res.status(201).json({message: "New Agent Created", res: newAgent});
    } catch (error) {
        throw new ErrorHandler("Server Error, try again later!!", 500);
    }
}

export const allAgents = async (req, res) => {
  try {
    const result = await getAllAgents();
    if (result.success) {
      return res.status(200).json({ success: true, agents: result.res });
    } else {
      return res.status(404).json({ success: false, message: "No agents found" });
    }
  } catch (error) {
    throw new ErrorHandler("Server Error, try again later!!", 500);
  }
};
