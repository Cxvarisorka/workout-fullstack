import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import workoutRoutes from "./routes/workouts.routes.js";
import cors from "cors";

dotenv.config();

// express app
export const app = express();


// Middleware
app.use(express.json());
app.use(cors());


// Routes
app.use('/api/workouts',workoutRoutes);

// Connect to Db
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT,() => {
            console.log("connected to db & listening on port", process.env.PORT);
        }); 
    })
    .catch(err => {
        console.log(err);
    })

