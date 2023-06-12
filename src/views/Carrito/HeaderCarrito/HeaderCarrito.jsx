import "./Header.css";
function HeaderCarrito() {
  return (
    <div className="clase-input">
      <header className=" header navbar navbar-expand-lg py-5 ">
        <div className="logo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBnF3KVtG0lEWRnUyBD9BdUVWHfvu57wh9HF-KOoQ&s"
            alt="Logo"
            width="50px"
          />
          <h4>My Music store</h4>
        </div>
        <div className="d-flex  w-100 justify-content-end ">
          <form className="d-flex w-50 " role="search">
            <input
              className=" form-control me-2"
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
    </div>
  );
}

export default HeaderCarrito;
