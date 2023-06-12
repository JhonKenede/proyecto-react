import { Link } from "react-router-dom";
function NavBarCarrito() {
  return (
    <div className="d-flex justify-content-end">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container d-flex">
          <div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    to="/carrito"
                    className="nav-link active"
                    aria-current="page"
                  >
                    Carrito
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="FinalizarPedido"
                    className="nav-link active"
                    aria-current="page"
                  >
                    Finalizar Pedido
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="FormadePago"
                    className="nav-link"
                    aria-current="page"
                  >
                    Forma de pago
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            ></div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBarCarrito;
