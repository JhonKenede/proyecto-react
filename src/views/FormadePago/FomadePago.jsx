import { Link } from "react-router-dom";
function FomadePago() {
  return (
    <>
      <h3>Forma de pago</h3>
      <div>
        <Link to="/productos">Seguir comprando</Link>
      </div>
      <h4>Mis tarjetas</h4>
      <form action="">
        <label htmlFor="tarjeta 1">
          <input
            type="radio"
            name="tarjeta"
            value="Mastercard...6547"
            id="tarjeta 1"
          />
          Mastercard...6547
        </label>
        <label htmlFor="tarjeta 2">
          <input
            type="radio"
            name="tarjeta"
            value="Mastercard...6548"
            id="tarjeta 2"
          />
          Mastercard...6548
        </label>
        <label htmlFor="tarjeta 3">
          <input
            type="radio"
            name="tarjeta"
            value="Mastercard...6549"
            id="tarjeta 3"
          />
          Mastercard...6549
        </label>
        <a href="/HTML/finalizarpedido.html">Pagar con tarjeta</a>
      </form>
      <div>
        <div className="d-flex row">
          <h5>Anadir nueva tarjeta</h5>
          <div className="d-block">
            <form action="">
              <input
                type="text"
                name="numero tarjeta"
                placeholder="Numero de la tarjeta"
              />
              <input
                type="text"
                name="titular tarjeta"
                placeholder="Titutal de la tarjeta"
              />
              <input type="text" name="caducidad" placeholder=" Caducidad" />
              <input
                type="text"
                name="codigo seguro"
                placeholder="Codigo seguro"
              />
              <button type="submit">Anadir a mi tarjetas</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default FomadePago;
