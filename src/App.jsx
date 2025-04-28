import { Routes, Route } from "react-router-dom";
import React, { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";
import "./App.css";
import NavBarr from "./components/NavBarr";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import Pizza from "./pages/Pizza";
import Profile from "./components/Profile";
import NotFound from "./components/NotFound";

export default function App() {
  const { userIsLogged } = useContext(GlobalContext);

  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBarr />
      <main className="flex-fill">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          
          {/* ✅ SOLO proteger Profile */}
          <Route
            path="/profile"
            element={userIsLogged ? <Profile /> : <Login />}
          />

          {/* 🚀 Dejar Cart LIBRE */}
          <Route path="/cart" element={<Cart />} />

          {/* Página de detalle */}
          <Route path="/pizza/:parametro" element={<Pizza />} />

          {/* Página 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
