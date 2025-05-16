import mongoose from "mongoose";

const connectToDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB is connected");
    } catch (error) {
        console.error("DB connection error", error.message);
        process.exit(1);
    }
    
}

export default connectToDb;