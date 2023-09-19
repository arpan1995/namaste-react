// import { LOGO_URL } from "../utils/contants";
import ResturantCard from "./RestaurantCard";
import { useState, useEffect } from "react";


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

//   let [filteredRestraunt, setFilteredRestraunt] = useState([])
  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9269735&lng=77.5766264&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);

    // setlistofResturant(json.data.cards[0].data.data.cards)
    // setFilteredRestraunt(json.data.cards[0].data.data.cards)
  };

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            className="search-box"
            type="text"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              console.log(searchText);
              const filteredRestraunt = listofResturant.filter(
                (res) => res.data.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setlistofResturant(filteredRestraunt)
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterRes = listofResturant.filter(
              (res) => res.data.avgRating >= 4
            );
            setlistofResturant(filterRes);
            // setFilteredRestraunt
          }}
        >
          Top Rated Resturant
        </button>
      </div>
      <div className="res-container">
      {/* filteredRestraunt */}
        {listofResturant.map((resturant) => (
          <ResturantCard key={resturant.data.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
