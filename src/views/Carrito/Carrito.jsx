import { Link } from "react-router-dom";
function Carrito() {
  return (
    <>
      <h3 className="micarrito">Mi carrito</h3>
      <div className="container-full">
        <div className="  w-100">
          <div className="mistarjetas">
            <div className="tarjeta-individual ">
              <img
                src="https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/378249/10744137_800.jpg"
                alt="Gretsch"
                width="85 px"
              />

              <p>
                <span>650.99€</span>
              </p>
              <input type="number" name="cantidad" min="1" />
              <button>Eliminar</button>
            </div>
            <div className="tarjeta-individual">
              <img
                src="https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/154407/12658491_800.jpg"
                alt="Stratocaster"
                width="85px"
              />

              <p>
                <span>450.99€</span>
              </p>
              <input type="number" name="cantidad" min="1" />
              <button>Eliminar</button>
            </div>
            <div className="tarjeta-individual">
              <img
                src="https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/439170/13994796_800.jpg"
                alt="Telecasrer"
                width="85 px"
              />

              <p>
                <span>890.99€</span>
              </p>
              <input type="number" name="cantidad" min="1" />
              <button>Eliminar</button>
            </div>
            <div className="enlace">
              <Link to="/productos">Seguir comprando</Link>
            </div>
          </div>
        </div>
        <div className="container-right">
          <h3>Resumen del pedido</h3>
          <p>
            Continua con el proceso de la compra para conectar tu Coinbase
            Wallet o pagar con tu tarjeta
          </p>
          <p>
            <span>650.99€</span>
          </p>
          <a href="/HTML/Formadepago.html">Proceder al pago</a>
        </div>
      </div>
    </>
  );
}

export default Carrito;
