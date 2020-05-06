import React from "react";

class RestaurantShow extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.requestRestaurant(this.props.match.params.id)
    }

    render(){
        
        if (!this.props.restaurant) return null;
        if (!Object.values(this.props.reviews).length) return null;
        const {restaurant, reviews, users} = this.props;
        const imgStyle = {
            backgroundImage: `url(${restaurant.photoURL})`,
        }; 
    
        return(
        <div>
            <div className="show-img" style={imgStyle}></div>
            <div className="placeholder"></div>
            <div className="content-box">
                <nav>
                    <a>Overview</a>
                    <a>Photos</a>
                    <a>Menu</a>
                    <a>Reviews</a>
                </nav>
                
                <h1>{restaurant.name}</h1>
                <p>{restaurant.overview}</p>
                <div>

                </div>

                <div>
                    <p>reviews</p>
                    {restaurant.review_ids.map(id => (
                        <div>
                            <p>{reviews[id].title}</p>
                            <p>{users[reviews[id].user_id].firstname}</p>
                            <p>{reviews[id].body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        )
    }
}

export default RestaurantShow;