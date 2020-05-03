import React from "react";
import {Link} from "react-router-dom"


class RestaurantsIndexItem extends React.Component {

  constructor(props){
    super(props)
    this.goToEdit = this.goToEdit.bind(this)
    
  }
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

   goToEdit(e) {

    e.preventDefault();
  
    this.props.updateSearch("time", e.currentTarget.innerHTML);
    this.props.toggleState();

  }

   handleClick (field){

     return e => this.props.updateSearch(field, e.currentTarget.innerHTML)

    }
  


  render() {

    const { restaurant } = this.props;
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
          <Link to={`/restaurants/${restaurant.id}`}>{restaurant.name}</Link>
          <br />
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