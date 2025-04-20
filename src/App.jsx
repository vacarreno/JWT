import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import NavBarr from "./components/NavBarr";
//import Login from "./pages/Login";
//import Register from "./pages/Register";
//import Tareas from "./components/Tareas";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <NavBarr />
        <main className="flex-fill">
        {/*<Home />*/}
        {/* <Login /> */}   
        {/* <Register /> */}
        {/*<Tareas />*/}
        <Cart />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
