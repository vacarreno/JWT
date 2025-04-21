import { Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import NavBarr from "./components/NavBarr";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Tareas from "./components/Tareas";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import Pizza from "./pages/Pizza";
import Profile from "./components/Profile";
import NotFound from "./components/NotFound";


function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBarr />
      <main className="flex-fill">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/*<Route path="/tareas" element={<Tareas />} />*/}
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizza/p001" element={<Pizza />} />
          <Route path="/profile" element={<Profile />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
