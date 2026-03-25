import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";

import Home from "./views/Home";
import Login from "./views/Login";
import SignUp from "./views/SignUp";
import Contact from "./views/Contact";
import About from "./views/About";
import Scholership from "./views/Scholership";
import Material from "./views/Material";
import StationaryStore from "./views/StationaryStore";
import Cart from '../src/views/Cart.jsx'
import NewUpload from "./views/NewUpload.jsx";
import Dashboard from "./views/Dashboard.jsx"
import NewTour from "./views/NewTour.jsx"
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
      <Route path="/material" element={<Material />} />
       <Route path="/cart" element={<Cart />} />
       <Route path="/NewUpload" element={<NewUpload />} />
        <Route path="/Dashboard" element={<Dashboard />} />
         <Route path="/NewTour" element={<NewTour />} />
        <Route path="/NewMaterial" element={<NewMaterial />} />
              <Route path="/profile" element={<Profile />} />


       
    </Routes>
  </BrowserRouter>
);
