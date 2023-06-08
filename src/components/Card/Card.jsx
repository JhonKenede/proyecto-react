// function Card() {
//   return (
//     <div>
//       <div classNameNameName="container d-flex justify-content-between align-items-center my-3">
//         <div>
//           <h2>Productos destacados</h2>
//           <p>Aprovechas los decuentos</p>
//         </div>
//         <a href="" classNameNameName="btn btn-primary">
//           Ver todos
//         </a>
//       </div>
//       <section classNameNameName="container d-flex gap-3 my-3">
//         <div classNameNameName="card">
//           <img
//             src="https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/378249/10744137_800.jpg"
//             classNameNameName="card-img-top"
//             alt="..."
//           />
//           <div classNameNameName="card-body">
//             <div classNameNameName="d-flex justify-content-between">
//               <h5 classNameNameName="card-title">Fender Stratocaster</h5>
//               <span>
//                 199<i classNameNameName="bi bi-currency-euro text-primary"></i>
//               </span>
//             </div>
//             <div classNameNameName="text-black-50">
//               <i classNameNameName="bi bi-star-fill text-primary"></i>
//               <i classNameNameName="bi bi-star-fill text-primary"></i>
//               <i classNameNameName="bi bi-star-fill text-primary"></i>
//               <i classNameNameName="bi bi-star-fill"></i>
//               <i classNameNameName="bi bi-star-fill"></i>
//             </div>

//             <p classNameNameName="card-text">
//               Some quick example text to build on the card title and make up the
//               bulk of the cards content.
//             </p>
//             <div classNameNameName="d-flex gap-3">
//               <a href="#" classNameNameName="btn btn-primary w-100">
//                 añadir carrito
//               </a>
//               <a href="#" classNameNameName="btn btn-secondary">
//                 Ver
//               </a>
//             </div>
//           </div>
//         </div>
//         <div classNameNameName="card">
//           <img
//             src="https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/154407/12658491_800.jpg"
//             classNameNameName="card-img-top"
//             alt="..."
//           />
//           <div classNameNameName="card-body">
//             <div classNameNameName="d-flex justify-content-between">
//               <h5 classNameNameName="card-title">Fender Stratocaster</h5>
//               <span>
//                 199<i classNameNameName="bi bi-currency-euro text-primary"></i>
//               </span>
//             </div>
//             <div classNameNameName="text-black-50">
//               <i classNameNameName="bi bi-star-fill text-primary"></i>
//               <i classNameNameName="bi bi-star-fill text-primary"></i>
//               <i classNameNameName="bi bi-star-fill text-primary"></i>
//               <i classNameNameName="bi bi-star-fill"></i>
//               <i classNameNameName="bi bi-star-fill"></i>
//             </div>

//             <p classNameNameName="card-text">
//               Some quick example text to build on the card title and make up the
//               bulk of the cards content.
//             </p>
//             <div classNameNameName="d-flex gap-3">
//               <a href="#" classNameNameName="btn btn-primary w-100">
//                 añadir carrito
//               </a>
//               <a href="#" classNameNameName="btn btn-secondary">
//                 Ver
//               </a>
//             </div>
//           </div>
//         </div>
//         <div classNameNameName="card">
//           <img
//             src="https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/439172/13994766_800.jpg"
//             classNameNameName="card-img-top"
//             alt="..."
//           />
//           <div classNameNameName="card-body">
//             <div classNameNameName="d-flex justify-content-between">
//               <h5 classNameNameName="card-title">Fender Stratocaster</h5>
//               <span>
//                 199<i classNameNameName="bi bi-currency-euro text-primary"></i>
//               </span>
//             </div>
//             <div classNameNameName="text-black-50">
//               <i classNameNameName="bi bi-star-fill text-primary"></i>
//               <i classNameNameName="bi bi-star-fill text-primary"></i>
//               <i classNameNameName="bi bi-star-fill text-primary"></i>
//               <i classNameNameName="bi bi-star-fill"></i>
//               <i classNameNameName="bi bi-star-fill"></i>
//             </div>

//             <p classNameNameName="card-text">
//               Some quick example text to build on the card title and make up the
//               bulk of the cards content.
//             </p>
//             <div classNameNameName="d-flex gap-3">
//               <a href="#" classNameNameName="btn btn-primary w-100">
//                 añadir carrito
//               </a>
//               <a href="#" classNameNameName="btn btn-secondary">
//                 Ver
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Card;
import { Link } from "react-router-dom";
import "./Card.css";
function Card({ cards }) {
  return (
    <div className="d-flex justify-content-evenly">
      {cards.map((card, index) => (
        <div key={index} className="card " style={{ width: "18rem" }}>
          <img src={card.image} className="card-img-top " alt="..." />
          <div className="card-body">
            <h5 className="card-title">{card.titulo}</h5>
            <h6>{card.precio}</h6>
            <div className="text-black-50">
              <i className={card.star1}></i>
              <i className={card.star2}></i>
              <i className={card.star3}></i>
              <i className={card.star4}></i>
              <i className={card.star5}></i>
            </div>
            <p className="card-text">{card.parrafo}</p>
            <a href={card.link} className="btn btn-primary">
              {card.nombreLink}
            </a>
            <Link to="/DetalleProdutos" className="btn btn-primary ">
              Info
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
