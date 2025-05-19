import path from "path";
import { saveAssignedLeads } from "./upload.repository.js";
import { parseCSV, parseExcel } from "../../file_parser/fileParser.js";
import agentModel from "../agent/agent.schema.js";
import ErrorHandler from "../../middlewares/errorHandler.middleware.js";

export const handleFileUpload = async (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const ext = path.extname(file.originalname).toLowerCase();
    if (![".csv", ".xlsx", ".xls"].includes(ext)) {
      return res.status(400).json({ message: "Invalid file type" });
    }

    let parsedData =
      ext === ".csv" ? await parseCSV(file.path) : parseExcel(file.path);

    const validData = parsedData.filter(
      (item) => item.firstName && item.phone && item.notes
    );
    if (validData.length === 0) {
      return res.status(400).json({ message: "No valid entries found" });
    }

    const agents = await agentModel.find().limit(5);

    if (agents.length < 1) {
      return res.status(400).json({ message: "No agents found" });
    }

    let agentIndex = 0;
    const agentTaskMap = {};
    const distributedData = validData.map((entry) => {
      const agent = agents[agentIndex];
      agentIndex = (agentIndex + 1) % agents.length;

      const task = {
        firstName: entry.firstName,
        phone: entry.phone,
        notes: entry.notes,
        assignedTo: agent._id,
      };

      // Collect tasks for each agent
      if (!agentTaskMap[agent._id]) {
        agentTaskMap[agent._id] = [];
      }
      agentTaskMap[agent._id].push({
        firstName: entry.firstName,
        phone: entry.phone,
        notes: entry.notes,
      });

      return task;
    });


    await saveAssignedLeads(distributedData);

    // Update each agent's assignedTasks array
    for (const [agentId, tasks] of Object.entries(agentTaskMap)) {
      await agentModel.findByIdAndUpdate(agentId, {
        $push: { assignedTasks: { $each: tasks } },
      });
    }

    res.status(201).json({ message: "Files uploaded and assigned successfully" });
  } catch (error) {
    throw new ErrorHandler("Server Error, try again later!!", 500);
  }
};
