import express from "express";
import dotenv from "dotenv"
import cors from "cors";
import connectDB from "./db.js";

dotenv.config();
const app = express();
app.use(express.json());

app.use(cors());

const PORT = process.env.PORT || 8080;

app.get("/health",(req,res)=>{
    console.log("welcome");
    res.send("welcome to server")
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB()
});
