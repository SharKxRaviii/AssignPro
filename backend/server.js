import app from "./app.js";
import connectToDb from "./src/config_db/mongoose.js";
import dotenv from 'dotenv';
dotenv.config();

app.listen(process.env.PORT, () => {
    console.log(`Server is listening to ${process.env.PORT}`);
    connectToDb();
});