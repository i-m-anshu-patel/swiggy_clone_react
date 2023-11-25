import { Link } from "react-router-dom";
import '../App.css';

const RestaurantCard = ({ restaurant }) => {
    return (
        <Link to={'/restaurants/' + restaurant.info.id} style={{ textDecoration: 'none', color: 'black' }}>
            <div className="card my-3 restaurant-card" style={{ "width": '22rem' }}>
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + restaurant.info.cloudinaryImageId} className="card-img-top p-1" alt="..." height="200px" style={{ 'borderRadius': '10px' }} />
                <div className="card-body">
                    <h5 className="card-title">{restaurant.info.name}</h5>
                    <p className="card-text">{restaurant.info.locality} - {restaurant.info.areaName}</p>
                    <p className="card-text">{restaurant.info.costForTwo}</p>
                    <p className="card-text">{restaurant.info.avgRating} star ratings</p>
                </div>
            </div>
        </Link>

    );
}

export default RestaurantCard;