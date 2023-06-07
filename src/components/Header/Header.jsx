function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary py-5">
        <div className="container gap-3">
          <a className="navbar-brand text-light" href="#">
            JM Store
          </a>
          <form className="d-flex w-100" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
          <button type="button" className="btn btn-warning position-relative">
            carrito
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              99+
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Header;
