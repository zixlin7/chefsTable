import React from "react";
import {
    FaStar,
    FaStarHalfAlt
} from "react-icons/fa";
import {withRouter} from "react-router-dom"

class TrendingItem extends React.Component { 
   constructor(props){
       super(props)
       this.handleClick = this.handleClick.bind(this)
   }
    handleClick(e){
        e.preventDefault();
        this.props.requestRestaurant(this.props.restaurant.id)
            .then(res => this.props.history.push(`/restaurants/${this.props.restaurant.id}`))
    }

    mapPriceRange(price){
        const range = ["", "$", "$$", "$$$", "$$$$"];
        return range[price];
    }

    render(){
        const {restaurant} = this.props;
        const imgStyle = {
            backgroundImage: `url(${restaurant.photoURL})`,
        };
        const rating = parseFloat(restaurant.average_rating).toFixed(1)
        return (
            <div className="trending-item-box">
                <div className="img" id="trending-img" style={imgStyle} onClick={this.handleClick} ></div>
                <div className="restaurant-info" id="trending-info">
                    <button id="res-name" onClick={this.handleClick}>{restaurant.name} </button>
                    <br />
                    {/* <p><FaStar /></p> */}
                    <div className="rating">
                        {rating >= 4 && rating <= 4.3
                            ? <p><FaStar /><FaStar /><FaStar /><FaStar /></p>
                            : rating >= 4.4 && rating <= 4.6
                                ? <p><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></p>
                                : <p><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                        }

                        <span>{rating}</span>
                        <span>({restaurant.review_ids.length})</span>
                    </div>
                    <span name="price">{this.mapPriceRange(restaurant.price_range)}</span>
                    <span name="cuisine">{restaurant.cuisine}</span>
                    <span name="city">{restaurant.city}</span>
                </div>  
            </div>
        )
    }
}

export default withRouter(TrendingItem);