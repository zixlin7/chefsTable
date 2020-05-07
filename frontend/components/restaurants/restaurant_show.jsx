import React from "react";
import {
    FaStar,
    FaStarHalfAlt,
    FaRegCommentAlt,
    FaRegMoneyBillAlt,
    FaUtensils,
    FaRegUser
} from "react-icons/fa";
import {Link} from "react-router-dom";

class RestaurantShow extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        
        this.props.requestRestaurant(this.props.match.params.id)
    }

    priceMapping(price){
        if(price === 1){
            return "$10 and under"
        } else if (price === 2){
            return "$20 and under"
        } else if (price === 3){
            return "$30 and under"
        } else {
            return "above $30"
        }
    }

    render(){
        
        
        if (!this.props.restaurant) return null;
        if (!this.props.restaurant.review_ids.length) return null;
        if (this.props.restaurant.review_ids.length !== Object.values(this.props.reviews).length) return null;
        if (!Object.values(this.props.reviews).length) return null;
        
        const {restaurant, reviews, users} = this.props;
        const imgStyle = {
            backgroundImage: `url(${restaurant.photoURL})`,
        }; 
        const rating = parseFloat(restaurant.average_rating).toFixed(1)
       
        return(
        <div>
            <div className="show-img" style={imgStyle}></div>
            <div className="placeholder">
                <div className="content-box">
                    <nav className="show-nav">
                        <a>Overview</a>
                        <a>Photos</a>
                        <a>Menu</a>
                        <a>Reviews</a>
                    </nav>
                    
                    <h1>{restaurant.name}</h1>
                    <div className="rating">
                        {rating >= 4 && rating <= 4.3
                            ? <p id="star"><FaStar /><FaStar /><FaStar /><FaStar /></p>
                            : rating >= 4.4 && rating <= 4.6
                            ? <p id="star"><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></p>
                            : <p id="star"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                        }

                        <span>{rating}</span>
                        <span className="info-span">  <FaRegCommentAlt/>   {restaurant.review_ids.length} reviews</span>
                        <span className="info-span">  <FaRegMoneyBillAlt/>   {this.priceMapping(restaurant.price_range)} </span>
                        <span className="info-span">  <FaUtensils/>   {restaurant.cuisine} </span>
                    
                    </div>

                    <p className="overview">{restaurant.overview}</p>
                    <div className="menu">
                        <h2>Menu</h2>
                        <a href={restaurant.website_url}>see the menu on restaurant's website</a>
                    </div>

                    <div className="review">
                        <h2>What people are saying</h2>
                            <Link to={`/restaurants/${restaurant.id}/reviews/new`}>Leave a review</Link>
                        {restaurant.review_ids.map(id => (
                            <div className="review-item">
                                <div className="user-profile">
                                    <div className="pic">
                                        <p><FaRegUser /></p>
                                    </div>
                                    <p>{users[reviews[id].user_id].firstname}</p>
                                </div>
                                <div className="review-content">
                                    <p id="title">{reviews[id].title}</p>
                                    {reviews[id].rating >= 4 && reviews[id].rating <= 4.3
                                        ? <span><FaStar /><FaStar /><FaStar /><FaStar /></span>
                                        : reviews[id].rating >= 4.4 && reviews[id].rating <= 4.6
                                            ? <span><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></span>
                                            : <span><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                                    }
                                    <p>{reviews[id].body}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        )
    }

    componentWillUnmount(){
        this.props.clearReviews();
    }
}

export default RestaurantShow;