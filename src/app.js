import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { errorHandler } from "./middleware/errorHandler.js";
dotenv.config();


const app = express();


// Middleware
app.use(    // Allow access from anywhere for now
    cors({
        origin: "*",
        // origin: allowedOrigins,
        //credentials: true,
    })
);
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
})
// Routes



// Global Error Handler
app.use(errorHandler);

export default app;
