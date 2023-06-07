import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import Card from "../../components/Card";
import { cards } from "../../components/Card/CArdsDummy";

import Section from "../../components/Section";
import Footer from "../../components/Footer/Footer";
function Productos() {
  return (
    <>
      <Header />
      <NavBar />
      <Card cards={cards} />
      <div>
        <div>
          <section className="container d-flex justify-content-between align-items-center my-5 py-5">
            <div className="w-100">
              <h2>Testimonios clientes</h2>
              <p>No lo mires, únete</p>
              <a href="" className="btn btn-primary">
                Ver todos los Testimonios
              </a>
            </div>
            <div className="w-100">
              <figure className="text-end border border-primary border-2 rounded-4 p-5">
                <blockquote className="blockquote">
                  <p>
                    A well-known quote, contained in a blockquote element.A
                    well-known quote, contained in a blockquote element.
                  </p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </figcaption>
                <div className="text-black-50">
                  <i className="bi bi-star-fill text-primary"></i>
                  <i className="bi bi-star-fill text-primary"></i>
                  <i className="bi bi-star-fill text-primary"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
              </figure>
            </div>
          </section>
        </div>
      </div>
      <Section />
      <Footer />
    </>
  );
}

export default Productos;
