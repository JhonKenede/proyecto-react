import { Link } from "react-router-dom";
function HeaderCarrito() {
  return (
    <>
      <header>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBnF3KVtG0lEWRnUyBD9BdUVWHfvu57wh9HF-KOoQ&s"
          alt="Logo"
          width="50px"
        />

        <div className="d-flex justify-content-evenly ">
          <h4>My Music store</h4>

          <Link to="/carrito">Carrito</Link>
          <Link to="FormadePago">Forma de pago</Link>
          <Link to="FinalizarPedido">Finalizar pedido</Link>
        </div>
      </header>
    </>
  );
}

export default HeaderCarrito;
