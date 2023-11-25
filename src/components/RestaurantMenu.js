import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantMenuList from "./RestaurantMenuList";

const RestaurantMenu = () => {
    const { resId } = useParams()
    const [menuList, setMenuList] = useState([]);
    const [menuListWithCategories, setMenuListWithCategories] = useState([]);
    const [menuListWithOutCategories, setMenuListWithOutCategories] = useState([]);
    const [resInfo, setResInfo] = useState([]);
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9535834&lng=77.7153281&restaurantId=" + resId + "&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        setResInfo(json?.data?.cards[0]?.card?.card?.info);
        setMenuListWithCategories((json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards).filter(menu => (menu.card.card.title && menu.card.card.categories)));
        setMenuListWithOutCategories((json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards).filter(menu => (menu.card.card.title && menu.card.card.itemCards)));
    }
    useEffect(() => {
        fetchData();
    }, [])


    return (resInfo.length === 0) ? (<h1>Loading....</h1>) : (
        <div className="container my-3">
            <div className="d-flex justify-content-between align-items-end">
                <p className="h4">{resInfo.name}</p>
                <p className="h6">{resInfo.avgRating} ratings</p>
            </div>

            <div style={{ backgroundImage: `url(https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resInfo.cloudinaryImageId})`, minHeight: "5rem" }}>
            </div>
            <h6 className="text-center">{resInfo.locality} - {resInfo.areaName}</h6>
            <div className="my-5">
                {menuListWithOutCategories.map((menu) => (
                    <RestaurantMenuList key={menu.card.card.title} menu={menu.card.card.itemCards} title={menu.card.card.title} categories={0} />
                ))}
                {menuListWithCategories.map((menu) => (
                    <RestaurantMenuList key={menu.card.card.title} menu={menu.card.card.categories} title={menu.card.card.title} categories={1} />
                ))}
            </div>

        </div>
    );
}

export default RestaurantMenu;