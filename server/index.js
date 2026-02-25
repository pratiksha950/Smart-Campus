import express from "express";
import dotenv from "dotenv"
import cors from "cors";
import connectDB from "./db.js";
import { getHome, getHealth } from "./controllers/health.js";
import { postSignUp, postLogin } from "./controllers/auth.js";


dotenv.config();
const app = express();
app.use(express.json());

app.use(cors());

const PORT = process.env.PORT || 8080;

app.get("/health",getHealth)
app.get("/", getHome)

app.post("/Signup", postSignUp)
app.post("/login", postLogin)



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB()
});
