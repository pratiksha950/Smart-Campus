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
import Store from "./views/Store";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/store" element={<Store />} />
      <Route path="/scholership" element={<Scholership />} />
      <Route path="/material" element={<Material />} />
    </Routes>
  </BrowserRouter>
);
