import dotenv from "dotenv";
dotenv.config();

const MONGO_URI: string = process.env.MONGO_URI || "";
const JWT_SECRET: string = process.env.JWT_SECRET || "";

export { MONGO_URI, JWT_SECRET };