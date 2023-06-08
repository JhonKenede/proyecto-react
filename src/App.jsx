import "./App.css";
import Layout from "./components/Layout";
import NotFound from "./NotFound";
import Home from "./views/Home";
import Productos from "./views/Productos";
import Carrito from "./views/Carrito";
import { Routes, Route } from "react-router-dom";
import CarritoLayout from "./components/CarritoLayout";
import FormadePago from "./views/FormadePago";
import FinalizarPedido from "./views/FinalizarPedido";
import DetalleProductos from "./views/Detalles-Productos";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="productos" element={<Productos />} />
        <Route path="carrito" element={<Carrito />} />
      </Route>
      <Route path="/carrito" element={<CarritoLayout />}>
        <Route index element={<Carrito />} />

        <Route path="FormadePago" element={<FormadePago />} />
        <Route path="FinalizarPedido" element={<FinalizarPedido />} />
        <Route path="DetalleProdutos" element={<DetalleProductos />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
