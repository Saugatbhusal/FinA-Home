import "./Home.css";
import { Link } from "react-router-dom";
function Card({data}) {
  
  return (
    <div className="card-wrapper">
      <Link to={`/listings/detail/${data._id}`} className="list-link">
        <div className="card listing-card" >
          <img src={data.image.url} className="card-img-top" alt="image" />
          <div className="card-body">
            <p className="card-text">
            <b>{data.title}</b>   <br />
              {data.price}
            </p>
           
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
