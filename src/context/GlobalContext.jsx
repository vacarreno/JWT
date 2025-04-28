import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const apiUrl = "http://localhost:5000/api/pizzas"; // URL de la API
  const [user, setUser] = useState(null);
  const [userIsLogged, setUserIsLogged] = useState(false);
  const [pizzas, setPizzas] = useState([]);
  const [cart, setCart] = useState([]); // 🛒 Nuevo estado del carrito

  const getPizzas = async () => {
    console.log("Cargando pizzas...");
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setPizzas(data);
    } catch (error) {
      console.error("Error al obtener las pizzas:", error);
    }
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setUserIsLogged(true);
    } else {
      setUser(null);
      setUserIsLogged(false);
    }
    getPizzas();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        user,
        setUser,
        userIsLogged,
        setUserIsLogged,
        pizzas,
        setPizzas,
        cart,
        setCart, // 🛒 Exportar cart y setCart para el resto de la app
        getPizzas
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
