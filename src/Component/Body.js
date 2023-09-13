// import { LOGO_URL } from "../utils/contants";
import ResturantCard from "./RestaurantCard";
import {useState, useEffect} from "react";

const Body = () => {
  let [listofResturant, setlistofResturant] = useState([
    {
      data: {
        id: "123",
        name: "Wow China",
        cuisines: "Biryani, North Indian",
        costForTwo: 40000,
        deliveryTime: "20",
        avgRating: "3.5",
      },
    },
    {
      data: {
        id: "1233",
        name: "Chowman",
        cuisines: "Ciniese, North Indian",
        costForTwo: 50000,
        deliveryTime: "20",
        avgRating: "4.0",
      },
    },
    {
      data: {
        id: "1232",
        name: "Hydrabad Chefs",
        cuisines: "Biryani, North Indian",
        costForTwo: 40000,
        deliveryTime: "20",
        avgRating: "4.5",
      },
    },
    {
        data: {
          id: "123s2",
          name: "Imperial",
          cuisines: "Biryani, North Indian",
          costForTwo: 30000,
          deliveryTime: "25",
          avgRating: "3.5",
        },
    },
  ]);
  
  useEffect(() => {
    fetchData()
  },[])

  const fetchData = async () => {
    const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9269735&lng=77.5766264&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json()
    console.log(json)
  }
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterRes = listofResturant.filter(
              (res) => res.data.avgRating >= 4
            );
                setlistofResturant(filterRes);
          }}
        >
          Top Rated Resturant
        </button>
      </div>
      <div className="res-container">
        {listofResturant.map((resturant) => (
          <ResturantCard key={resturant.data.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

