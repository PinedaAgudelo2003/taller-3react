import { createContext, useContext, useState, useEffect } from "react";

const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {

  const [carrito, setCarrito] = useState(() => {
    if (typeof window === "undefined") return [];
    const saved = localStorage.getItem("carrito");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const parsePrice = (precio) => {
    if (typeof precio === "number") return precio;
    if (typeof precio !== "string") return 0;
    return Number(precio.replace(/[^0-9.-]+/g, "")) || 0;
  };

  // Agregar producto o aumentar cantidad si ya existe
  const agregarCarrito = (producto) => {
    const existe = carrito.find((p) => p.id === producto.id);
    if (existe) {
      setCarrito(
        carrito.map((p) =>
          p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p
        )
      );
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  // Eliminar producto del carrito
  const eliminarCarrito = (id) => {
    setCarrito(carrito.filter((p) => p.id !== id));
  };

  // Reducir cantidad o eliminar si llega a 0
  const reducirCantidad = (id) => {
    setCarrito(
      carrito
        .map((p) => (p.id === id ? { ...p, cantidad: p.cantidad - 1 } : p))
        .filter((p) => p.cantidad > 0)
    );
  };

  // Vaciar todo el carrito
  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const enCarrito = (id) => carrito.some((p) => p.id === id);

  const totalProductos = carrito.reduce((acc, p) => acc + p.cantidad, 0);

  const totalPrecio = carrito.reduce(
    (acc, p) => acc + parsePrice(p.precio) * p.cantidad,
    0
  );

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        agregarCarrito,
        eliminarCarrito,
        reducirCantidad,
        vaciarCarrito,
        enCarrito,
        totalProductos,
        totalPrecio,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

export const useCarrito = () => {
  const context = useContext(CarritoContext);
  if (!context) {
    throw new Error("useCarrito debe usarse dentro de un CarritoProvider");
  }
  return context;
};