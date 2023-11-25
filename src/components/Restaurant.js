import { useState, useEffect } from "react"
import RestaurantCard from "./RestaurantCard";
import RestaurantFilters from "./RestaurantFilters";
import { SWIGGY_URL } from "../utils/constants";

const Restaurant = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
     const [avgRatingFilter, setAvgRatingFilter] = useState(false);
     const [deliveryTimeFilter, setDeliveryTimeFilter] = useState(false);
     const [originalListOfRestaurants, setOriginalListOfRestaurants] = useState([])

    const fetchData = async () => {
        const data = await fetch(SWIGGY_URL);
        const json = await data.json()
        setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setOriginalListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      }
      useEffect(() => {
        fetchData();
      }, [])

      return (
        <>
        <div className="container my-2">
             <RestaurantFilters setListOfRestaurants={setListOfRestaurants} listOfRestaurants={listOfRestaurants} avgRatingFilter={avgRatingFilter} setAvgRatingFilter={setAvgRatingFilter} deliveryTimeFilter={deliveryTimeFilter} setDeliveryTimeFilter={setDeliveryTimeFilter} originalListOfRestaurants={originalListOfRestaurants}/>
            <div className="row gx-5">
              { listOfRestaurants && (listOfRestaurants.length === 0)? (<h1>Loading...</h1>)
               : listOfRestaurants && listOfRestaurants.map((restaurant) => 
                  (<div key={restaurant.info.id} className="col-md-4">
                  <RestaurantCard key={restaurant.info.id} restaurant={restaurant} /></div>
                  ))}
          
            </div>
        
        </div>
        </>
      )
}

export default Restaurant;