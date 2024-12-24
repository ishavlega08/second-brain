import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db";

dotenv.config();
const PORT = process.env.PORT || 3000;


const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("<h1>Server is running...</h1>");
});

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`App is listening to PORT ${PORT}`);
        });
    })

    .catch((error) => {
        console.log(`MongoDB connection failed ${error}`);
    })