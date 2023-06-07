function Section() {
  return (
    <div>
      <section className="container d-flex">
        <div className="d-flex gap-3 w-100">
          <i className="bi bi-credit-card text-primary h2"></i>
          <div>
            <h5>Pago seguro </h5>
            <p>100% garantizado</p>
          </div>
        </div>
        <div className="d-flex gap-3 w-100">
          <i className="bi bi-truck text-primary h2"></i>
          <div>
            <h5>Envio gratis</h5>
            <p>A partir de 50€</p>
          </div>
        </div>
        <div className="d-flex gap-3 w-100">
          <i className="bi bi-check2-circle text-primary h2"></i>
          <div>
            <h5>2 años de garantia</h5>
            <p>En todo nuestros productos</p>
          </div>
        </div>
        <div className="d-flex gap-3 w-100">
          <i className="bi bi-box-seam text-primary h2"></i>
          <div>
            <h5>Ofertas unicas</h5>
            <p>Precio mayorista</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section;
