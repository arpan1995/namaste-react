const ResturantCard = (props) => {
    const {resData} = props;

    const {
        name,
        // cuisines,
        costForTwo,
        deliveryTime,
        avgRating,
    } = resData?.data;

    return(
        <div className ="res-card">
            <h3> {name} </h3>
            {/* <h4>{cuisines.join(", ")}</h4> */}
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo / 100} for two</h4>
            <h4>{deliveryTime} mins</h4>
        </div>
    );
};

export default ResturantCard;