import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.jsx'
import Signup from "./Signup.jsx";
import Post from "./Post.jsx";
import Forlogin from "./Forlogin.jsx";
import Users from "./Users.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/post" element={<Post />} />
      <Route path="/login" element={<Forlogin />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  </BrowserRouter>
  </StrictMode>,
)
