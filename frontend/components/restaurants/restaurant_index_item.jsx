import React from "react";
import {Link, Redirect} from "react-router-dom"
import {
  FaStar,
  FaStarHalfAlt
} from "react-icons/fa";

class RestaurantsIndexItem extends React.Component {

  constructor(props){
    super(props);
    this.state = {redirect: null};
    this.goToEdit = this.goToEdit.bind(this);
    this.handleShow = this.handleShow.bind(this);
    
  }


  mapPriceRange(price) {
    const range = ["", "$", "$$", "$$$", "$$$$"];
    return range[price];
  }

 

  getTimeSlots() {
    let searchTime = parseInt(this.props.search.time);
    let openTime = new Date(this.props.restaurant.open_hour).getHours();
    let closeTime = new Date(this.props.restaurant.close_hour).getHours();
    
    const timeSlots = [];
    for(let i = searchTime - 1; i <= searchTime + 1; i++){
      if (i >= openTime && i<= closeTime){
        timeSlots.push(i);
      }
    }
    const full = timeSlots.map(time => {
      return time < 10 ? `0${time}:00` : `${time}:00`
    })

    const half = timeSlots.map((time) => {
      return time < 10 ? `0${time}:30` : `${time}:30`;
    });

    return [...full, ...half].sort();

  }

   goToEdit(e) {

    e.preventDefault();
  
    this.props.updateSearch("time", e.currentTarget.innerHTML);
    this.props.toggleState();

  }

   handleShow(e){
    e.preventDefault();
    this.props.requestRestaurant(this.props.restaurant.id)
     this.setState({ redirect: `/restaurants/${this.props.restaurant.id}`});
   }

   handleClick (field){

     return e => this.props.updateSearch(field, e.currentTarget.innerHTML);

    }

    // mapRatings(rating){
    //   if 
    // }


  render() {
    if (this.state.redirect)
      return <Redirect to={this.state.redirect} />;

    const { restaurant } = this.props;
    const rating = parseFloat(restaurant.average_rating).toFixed(1)
    const imgStyle = {
      backgroundImage: `url(${restaurant.photoURL})`,
      height: '225px',
      width: '350px',
      backgroundSize: 'cover',
      flex: '0 0 350px',
      marginRight: '25px'
    }; 
  
    return (
      <div className="restaurant">
        <div className="img" style={imgStyle}></div>
        <div className="restaurant-info">
          <button onClick={this.handleShow} id="res-name" >{restaurant.name}</button>
          <br />
          {/* <p><FaStar /></p> */}
         <div className="rating">
            {rating >= 4 && rating <= 4.3
              ? <p><FaStar /><FaStar /><FaStar /><FaStar /></p>
              : rating >= 4.4 && rating <= 4.6
                ? <p><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt/></p>
                : <p><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
            }
            
            <span>{rating}</span>
            <span>({restaurant.review_ids.length})</span>
          </div>
          <span name="price">{this.mapPriceRange(restaurant.price_range)}</span>
          <span name="cuisine">{restaurant.cuisine}</span>
          <span name="city">{restaurant.city}</span>
          <div className="time-slots">
            {this.getTimeSlots().map(
              (time, i) => (
                <div key={i}> 
                  {this.props.toggleState
                  ? (<button onClick={this.goToEdit}>{time}</button>)
                    : <Link onClick={this.handleClick("time")} to={`/restaurants/${restaurant.id}/reservations/new`}>{time}</Link>
                }
                  
                </div>
              )
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default RestaurantsIndexItem;