import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const { resId } = useParams()
    const [menuList, setMenuList] = useState([]);
    const [resInfo, setResInfo] = useState([]);
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9535834&lng=77.7153281&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json()
        setResInfo(json?.data?.cards[0]?.card?.card?.info);
        setMenuList((json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards).filter(menu => menu.card.card.title));
      }
    useEffect(() => {
        fetchData();
    }, [])


    return (resInfo.length === 0) || (menuList.length === 0) ? (<h1>Loading....</h1>) : (
        <>
        <h1>{resInfo.name}</h1>
        <h6>{resInfo.locality} - {resInfo.areaName}</h6>
        <h6>{resInfo.avgRating} ratings</h6>
        </>
    );
}

export default RestaurantMenu;