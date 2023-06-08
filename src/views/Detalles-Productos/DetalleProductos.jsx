function DetalleProductos() {
  return (
    <>
      <img src="/assets/images/Gretsch.jpeg" alt="Gretsch" width="300 px" />
      <div>
        <h4>Gretsch</h4>
        <p>
          Gretsch es unas de las guitarras mas usadas para las canciones worship{" "}
          <br /> ya que ofrece un sonido encorpado y con un sonido muy calido,
          es una <br /> opcion que todo guitarras deberia considerar
        </p>
        <p>
          <span>890.99€</span>
        </p>
        <input type="number" name="cantidad" min="1" />
        <button>Add to cart</button>
      </div>
      <div>
        <h3>Caracteristicas</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          expedita nesciunt delectus libero, minus earum rerum molestias, quasi
          sunt corrupti placeat inventore provident nam laborum ex fugit nisi
          exercitationem reprehenderit?
        </p>
        <h2>Caracteristicas del producto</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          odio? Adipisci, aut? Aut esse numquam alias tenetur? Ducimus illum
          nostrum dolore, impedit odit placeat eos aliquid similique totam
          laudantium quae. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Ipsa non veniam fugiat et eos, iure deleniti officiis officia
          nostrum? Deserunt quis eligendi veniam assumenda. Obcaecati quidem
          illum deleniti quisquam temporibus!
        </p>
      </div>
      <div>
        <h3>
          Opiniones <span>1</span>
        </h3>
        <ul>
          <h3>Especificaciones</h3>
          <li>Versatilidad</li>
          <li>Sonido</li>
          <li>Calidad</li>
          <li>Cuerdas</li>
          <li>Agarre</li>
          <li>Peso</li>
          <li>Precio</li>
        </ul>
      </div>
    </>
  );
}

export default DetalleProductos;
