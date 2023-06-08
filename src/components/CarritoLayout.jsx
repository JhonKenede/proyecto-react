import { Outlet } from "react-router-dom";
import HeaderCarrito from "../views/Carrito/HeaderCarrito";

import Footer from "./Footer";
function CarritoLayout() {
  return (
    <>
      <HeaderCarrito />
      <Outlet />
      <Footer />
    </>
  );
}

export default CarritoLayout;
