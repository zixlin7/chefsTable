import React from "react";
import {Link} from "react-router-dom"


class RestaurantsIndexItem extends React.Component {
  mapPriceRange(price) {
    const range = ["", "$", "$$", "$$$", "$$$$"];
    return range[price];
  }

 

  getTimeSlots() {
    let searchTime = parseInt(this.props.search.time)
    
    const timeSlots = [];
    for(let i = searchTime - 1; i <= searchTime + 1; i++){
      timeSlots.push(i);
    }
    const full = timeSlots.map(time => {
      return time < 10 ? `0${time}:00` : `${time}:00`
    })

    const half = timeSlots.map((time) => {
      return time < 10 ? `0${time}:30` : `${time}:30`;
    });

    return [...full, ...half].sort();

  }

  

   handleClick (field){
     return e => this.props.updateSearch(field, e.currentTarget.innerHTML)
    }
  


  render() {
    const { restaurant } = this.props;
    return (
      <div className="restaurant">
        <Link to={`/restaurants/${restaurant.id}`}>{restaurant.name}</Link>
        <br />
        <span name="price">{this.mapPriceRange(restaurant.price_range)}</span>
        <span name="cuisine">{restaurant.cuisine}</span>
        <span name="city">{restaurant.city}</span>
        <div className="time-slots">
          {this.getTimeSlots().map(
            (time, i) => (
              <div key={i}> 
                <Link onClick={this.handleClick("time")} to={`/restaurants/${restaurant.id}/reservations/new`}>{time}</Link>
              </div>
            )
          )}
        </div>
      </div>
    );
  }
}

export default RestaurantsIndexItem;