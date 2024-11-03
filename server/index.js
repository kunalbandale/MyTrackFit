import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import UserRoutes from  "./routes/User.js"

// config
dotenv.config();

// define app
const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

app.use("/", async (req, res) => {
    res.status(200).json({
        message: "Hello World",
    });
});

// connect db
const connectDB = async () => {
    mongoose.set("strictQuery", true);
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connected to MongoDB");
    } catch (err) {
        console.log("Failed to connect to MongoDB:", err);
    }
};

const startServer = async () => {
    try {
        await connectDB();
        app.listen(8080, () => console.log("Server running at port 8080"));
    } catch (err) {
        console.log("Error starting server:", err);
    }
};

startServer();
