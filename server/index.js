import dotenv from "dotenv";
dotenv.config(); 

import express from "express";
import cors from "cors";
import connectDB from "./db.js";
import { getHome, getHealth } from "./controller/health.js";
import { postSignUp, postLogin } from "./controller/auth.js";
import ImageKit from "@imagekit/nodejs";

import {getTours,postTour,putTours,GetTourById,deleteTour} from "./controller/tour.js";
import {checkJWT} from "./middleware/jwt.js";
import { updateUser } from "./controller/auth.js";


import {
  getMaterials,
  postMaterial,
  deleteMaterial,
  getMaterialById,
} from "./controller/material.js";

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


app.put("/profile", checkJWT, updateUser);


// 📚 MATERIAL ROUTES
app.post("/materials",  postMaterial);
app.get("/materials",  getMaterials);
app.get("/materials/:id", getMaterialById);
app.delete("/materials/:id", deleteMaterial);

// 🗑️ DELETE ROUTE (NEW)
app.delete("/tours/:id", checkJWT, deleteTour);
app.delete("/materials/:id", checkJWT, deleteMaterial);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB();
});
