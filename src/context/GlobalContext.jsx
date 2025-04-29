import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const apiUrl = "http://localhost:5000/api/pizzas"; // URL de la API
  const [user, setUser] = useState(null);
  const [userToken, setUserToken] = useState(false);
  const [pizzas, setPizzas] = useState([]);
  const [cart, setCart] = useState([]); // 🛒 Nuevo estado del carrito

  // Función para obtener las pizzas de la API
  const getPizzas = async () => {
    console.log("Cargando pizzas...");
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Error al cargar las pizzas");
      }
      const data = await response.json();
      setPizzas(data);
    } catch (error) {
      console.error("Error al obtener las pizzas:", error);
      // Puedes agregar un mensaje de error aquí si lo deseas
    }
  };

  // Efecto para cargar el usuario desde localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setUserToken(true);
    } else {
      setUser(null);
      setUserToken(false);
    }
  }, []);

  // Efecto para cargar las pizzas desde la API
  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        user,
        setUser,
        userToken,
        setUserToken,
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
