import { useState } from "react";

const RestaurantFilters = ({ setListOfRestaurants, listOfRestaurants, avgRatingFilter, setAvgRatingFilter, deliveryTimeFilter, setDeliveryTimeFilter, originalListOfRestaurants }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const filterRating = () => {
        if (avgRatingFilter) {
            if (deliveryTimeFilter) {
                const newListOfRestaurants = originalListOfRestaurants.filter(
                    (res) => res.info.sla.deliveryTime < 30
                );
                setListOfRestaurants(newListOfRestaurants);
            }
            else {
                setListOfRestaurants(originalListOfRestaurants);
            }
            setAvgRatingFilter(false);
        }
        else {
            setAvgRatingFilter(true)
            const newListOfRestaurants = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(newListOfRestaurants);
        }

    }
    const filterDeliveryTime = () => {
        if (deliveryTimeFilter) {
            if (avgRatingFilter) {
                const newListOfRestaurants = originalListOfRestaurants.filter(
                    (res) => res.info.avgRating > 4
                );
                setListOfRestaurants(newListOfRestaurants);
            }
            else {
                setListOfRestaurants(originalListOfRestaurants);
            }
            setDeliveryTimeFilter(false);
        }
        else {
            setDeliveryTimeFilter(true);
            const newListOfRestaurants = listOfRestaurants.filter(
                (res) => res.info.sla.deliveryTime < 30
            );
            setListOfRestaurants(newListOfRestaurants);
        }
    }
    const handleSearchInput = (e) => {
        setSearchTerm(e.target.value);
    }
    const SearchSubmit = (e) => {
        e.preventDefault();
        const newListOfRestaurants = listOfRestaurants.filter(
            (res) => res.info.name.toLowerCase().includes(searchTerm)
        );
        setListOfRestaurants(newListOfRestaurants);
    }
    const handleFilterRemoval = () => {
        setListOfRestaurants(originalListOfRestaurants);
        setDeliveryTimeFilter(false);
        setAvgRatingFilter(false);
        setSearchTerm('');
    }
    console.log(listOfRestaurants)
    return (
        <div className="d-flex">
            <button className={`btn btn-${avgRatingFilter ? 'primary' : 'secondary'}`} onClick={filterRating}>4+ ratings</button>
            <button className={`btn btn-${deliveryTimeFilter ? 'primary' : 'secondary'} ms-2`} onClick={filterDeliveryTime}>Delivery less than  30 mins</button>
            <form className="d-flex ms-auto" onSubmit={SearchSubmit}>
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleSearchInput} value={searchTerm}/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <button className="btn btn-danger ms-2" onClick={handleFilterRemoval}>Remove All Filters</button>
        </div>
    )
}

export default RestaurantFilters;