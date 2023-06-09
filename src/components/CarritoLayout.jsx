import { Outlet } from "react-router-dom";
import HeaderCarrito from "../views/Carrito/HeaderCarrito";
import NavBarCarrito from "../views/Carrito/Navbar-Carrito/NavBarCarrito";

import Footer from "./Footer";
function CarritoLayout() {
  return (
    <>
      <HeaderCarrito />
      <NavBarCarrito />
      <Outlet />
      <Footer />
    </>
  );
}

export default CarritoLayout;
