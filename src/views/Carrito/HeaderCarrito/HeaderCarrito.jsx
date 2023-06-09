function HeaderCarrito() {
  return (
    <>
      <header className="navbar navbar-expand-lg bg-primary py-5">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBnF3KVtG0lEWRnUyBD9BdUVWHfvu57wh9HF-KOoQ&s"
          alt="Logo"
          width="50px"
        />
        <div className="d-flex justify-content-evenly ">
          <h4>My Music store</h4>

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
        </div>
      </header>
    </>
  );
}

export default HeaderCarrito;
