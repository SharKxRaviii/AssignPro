import uploadModel from "./upload.schema.js";

export const saveAssignedLeads = async (data) => {
    try {
        const result = await uploadModel.insertMany(data);
        return {
            success: true,
            res: result
        }
    } catch (error) {
        return {
            success: false,
            error: {
                statusCode: error.status || 500,
                msg: error.message
            }
        }
    }
}