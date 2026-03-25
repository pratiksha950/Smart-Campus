import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";

import Home from "./views/Home";
import Login from "./views/Login";
import SignUp from "./views/SignUp";
import Contact from "./views/Contact";
import About from "./views/About";
import Scholership from "./views/Scholership";
import Pyq from "./views/Pyq.jsx";
import StationaryStore from "./views/StationaryStore";
import Cart from '../src/views/Cart.jsx'
import StudyMaterial from "./views/StudyMaterial.jsx"
import NewMaterial from "./views/NewMaterial.jsx"
import Profile from "./views/Profile";


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/StationaryStore" element={<StationaryStore />} />
      <Route path="/Scholership" element={<Scholership />} />
      <Route path="/pyq" element={<Pyq />} />
       <Route path="/cart" element={<Cart />} />
        <Route path="/StudyMaterial" element={<StudyMaterial />} />
        <Route path="/NewMaterial" element={<NewMaterial />} />
              <Route path="/profile" element={<Profile />} />


       
    </Routes>
  </BrowserRouter>
);
