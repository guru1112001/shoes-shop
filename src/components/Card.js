import { IoStar } from "react-icons/io5";
import { BsBag } from "react-icons/bs";

function Card({img,title,star,reviews,prevPrice,newPrice}) {
  return (
     <section className="card">
          <img className="card-image" src={img}/>
          <div className="card-details">
            <h3  className="card-title">{title}</h3>
            <section className="card-reviews">
           {star}{star}{star}{star}
            <span className="total-reviews">{reviews}</span>
          </section>
            <section className="card-price">
              <div className="price">
                <del>{prevPrice}</del> {newPrice}
              </div>
              <div className="bag">
              <BsBag className="bag-icons" />
    
              </div>
            </section>
    
          </div>
        </section>
  )
}

export default Card