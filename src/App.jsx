import React from "react";
import "./App.css";
import NavBarr from "./components/NavBarr";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Tareas from "./components/Tareas";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Pizza from "./components/Pizza"; // Lo dejas comentado si no lo estás usando aún

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBarr />
      <main className="flex-fill">
        {/* <Home /> */}
        {/* <Login /> */}
        {/* <Register /> */}
        {/* <Tareas /> */}
        {/* <Cart /> */}
       <Pizza /> 
      </main>
      <Footer />
    </div>
  );
}

export default App;

