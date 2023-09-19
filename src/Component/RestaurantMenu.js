import { useState, useEffect } from "react"


const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.964805157392663&lng=77.71671786904334&restaurantId=65769&catalog_qa=undefined&submitAction=ENTER"
        );
        const json = await data.json();

        console.log(json)
    }

  return (
    <div>
    <h1>Name of the Restuarant</h1>
    <h2>Menu</h2>
    <ul>
        <li>Biryani</li>
        <li>Coke</li>
        <li>Noodles</li>
    </ul>
    </div>
  )
}

export default RestaurantMenu