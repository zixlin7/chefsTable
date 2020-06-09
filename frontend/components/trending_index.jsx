import React from "react";
import TrendingItem from "./trending_item"

const selectRestaurants = restaurants => {
    const id = ["1", "3", "6", "8"]
    const result = [];
    for(let key in restaurants){
        if (id.includes(key)){
            result.push(restaurants[key])
        }
    }
    return result;
}

const TrendingIndex = ({ restaurants, requestRestaurant }) => {
    const result = selectRestaurants(restaurants)
    return (
        <div className="trending-container">
            <h1>Trending Now</h1>
            <div className="trending-items">
                {result.map((restaurant, i) => (
                    <TrendingItem restaurant={restaurant} key={i}
                    requestRestaurant={requestRestaurant}/>
                ))}
            </div>
        </div>
    )
}

export default TrendingIndex;