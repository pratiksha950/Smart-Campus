import express from "express";
import dotenv from "dotenv"
import cors from "cors";
import connectDB from "./db.js";
import { getHome, getHealth } from "./controller/health.js";
import { postSignUp, postLogin } from "./controller/auth.js";
import ImageKit from "@imagekit/nodejs";

import {getTours,postTour,putTours,GetTourById,deleteTour} from "./controller/tour.js"
import {checkJWT} from "./middleware/jwt.js"



const client = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY
});


dotenv.config();
const app = express();
app.use(express.json());

app.use(cors());

const PORT = process.env.PORT || 8080;

app.get("/health",getHealth)
app.get("/", getHome)

app.get('/auth', function (req, res) {
  const { token, expire, signature } = client.helper.getAuthenticationParameters();
  res.send({ token, expire, signature, publicKey: process.env.IMAGEKIT_PUBLIC_KEY });
});


app.post("/Signup", postSignUp)
app.post("/login", postLogin)

app.put("/tours/:id",checkJWT,putTours)
app.get("/tours/:id",checkJWT,GetTourById)

//Tour   Routes
app.post("/tours",checkJWT,getTours)
app.get("/tours",checkJWT,postTour)


// 🗑️ DELETE ROUTE (NEW)
app.delete("/tours/:id", checkJWT, deleteTour);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB();
});
