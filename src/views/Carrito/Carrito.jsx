import { Link } from "react-router-dom";
function Carrito() {
  return (
    <>
      <h4>Mi carrito</h4>
      <div>
        <Link to="/productos">Seguir comprando</Link>
      </div>
      <div>
        <img src="/assets/images/Gretsch.jpeg" alt="Gretsch" width="30 px" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil a
          obcaecati eum distinctio. Illo ea nisi fugit omnis nihil, atque
          ratione aliquid rem adipisci quae quod, architecto eum fugiat
          necessitatibus?
        </p>
        <p>
          <span>650.99€</span>
        </p>
        <input type="number" name="cantidad" min="1" />
        <button>Eliminar</button>
      </div>
      <div>
        <img
          src="/assets/images/Stratocaster.jpeg"
          alt="Stratocaster"
          width="30 px"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil a
          obcaecati eum distinctio. Illo ea nisi fugit omnis nihil, atque
          ratione aliquid rem adipisci quae quod, architecto eum fugiat
          necessitatibus?
        </p>
        <p>
          <span>450.99€</span>
        </p>
        <input type="number" name="cantidad" min="1" />
        <button>Eliminar</button>
      </div>
      <div>
        <img
          src="/assets/images/Telecaster.jpeg"
          alt="Telecasrer"
          width="30 px"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil a
          obcaecati eum distinctio. Illo ea nisi fugit omnis nihil, atque
          ratione aliquid rem adipisci quae quod, architecto eum fugiat
          necessitatibus?
        </p>
        <p>
          <span>890.99€</span>
        </p>
        <input type="number" name="cantidad" min="1" />
        <button>Eliminar</button>
      </div>
      <div>
        <h3>Resumen del pedido</h3>
        <p>
          Continua con el proceso de la compra para conectar tu Coinbase Wallet
          o pagar con tu tarjeta
        </p>
        <p>
          <span>650.99€</span>
        </p>
        <a href="/HTML/Formadepago.html">Proceder al pago</a>
      </div>
    </>
  );
}

export default Carrito;
