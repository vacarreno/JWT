import { Routes, Route, Navigate } from "react-router-dom";
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
import User from "./pages/User";
import Admin from "./pages/Admin";

export default function App() {
  const { userToken, user } = useContext(GlobalContext);

  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBarr />
      <main className="flex-fill">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={userToken ? <Navigate to={"/"} /> : <Login />} />          
          {/* Ruta protegida para Profile */}
          <Route
            path="/profile"
            element={userToken ? <Profile /> : <Navigate to={"/login"} />}
          />    
           {/* Ruta protegida para Profile */}
           <Route
            path="/admin"
            element={userToken ? <Admin /> : <Navigate to={"/login"} />}
          />       
          <Route path="/cart" element={<Cart />} />          
          <Route path="/pizza/:parametro" element={<Pizza />} />
          <Route path="/user/:nombre" element={<User />} />   
          <Route path="/admin" element={user?.role === "admin" ? <Admin /> : <Navigate to={"/login"} /> } />    
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
