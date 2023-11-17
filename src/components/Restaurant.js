import { useState, useEffect } from "react"
import RestaurantCard from "./RestaurantCard";
import RestaurantFilters from "./RestaurantFilters";

const Restaurant = (props) => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    // const []

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9621948&lng=77.7115841&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json()
        setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      }
      useEffect(() => {
        fetchData();
      }, [])

      return (
        <>
        <h1>{props.name} page</h1>
        <div className="container my-2">
             <RestaurantFilters />
            <div className="row gx-5">
              { listOfRestaurants && (listOfRestaurants.length === 0)? (<h1>Loading...</h1>) : listOfRestaurants.map((restaurant) => 
                  (<div key={restaurant.info.id} className="col-md-4">
                  <RestaurantCard key={restaurant.info.id} restaurant={restaurant}/></div>
                  ))}
          
            </div>
        
        </div>
        </>
      )
}

export default Restaurant;