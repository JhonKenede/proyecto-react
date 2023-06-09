function FinalizarPedido() {
  return (
    <>
      <h3>Finalizar compra</h3>
      <div>
        <a href="/HTML/Formadepago.html">Mastercard...4567 seleccionada</a>
      </div>
      <div>
        <form action="">
          <input type="text" name="nombre" placeholder="Nombre" />
          <input type="text" name="apellidos" placeholder="Apellidos" />
          <input type="number" name="telefono" placeholder="Telefono" />
          <input type="email" name="email" placeholder="Email" />
          <input type="text" name="calle" placeholder="Calle" />
          <input type="number" name="numero" placeholder="Numero" />
          <input type="text" name="provincia" placeholder="Provincia" />
          <input type="text" name="codigo postal" placeholder="Codigo postal" />
          <input type="text" name="pais" placeholder="Pais" />
          <button>Anadir direccion de envio</button>
        </form>
      </div>
      <div>
        <h4>Resumen del pedido</h4>
        <div>
          <img
            src="https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/378249/10744137_800.jpg"
            alt="Gretsch"
            width="85 px"
          />
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
            src="https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/154407/12658491_800.jpg"
            alt="Stratocaster"
            width="85 px"
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
            src="https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/439170/13994796_800.jpg"
            alt="Telecasrer"
            width="85 px"
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
          <h3>Total</h3>
          <p>
            <span>450.99€</span>
          </p>
          <button>Pagar con tu tarjeta online</button>
        </div>
      </div>
    </>
  );
}

export default FinalizarPedido;
