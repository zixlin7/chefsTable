import React from "react";
import {Link} from "react-router-dom"
import produceTimeSlots from "../../util/time_slots_util";

class RestaurantsIndexItem extends React.Component {
  mapPriceRange(price) {
    const range = ["", "$", "$$", "$$$", "$$$$"];
    return range[price];
  }

  getTimeSlots(open, close) {
      let openTime = new Date(open).getHours();
      let closeTime = new Date(close).getHours();
      const timeSlots = [];
      while (openTime < closeTime){
          openTime ++;
          timeSlots.push(openTime);
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
          {produceTimeSlots(restaurant.open_hour, restaurant.close_hour).map(
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