# README

chef's Table is a full-stack project inspired by Opentable. It's a platform that people can view a list of restaurants featured in Netflix's show Chef's Table and make reservations based on availability.
  
Please check out the [live site](https://chefs-table.herokuapp.com/#/).
  
  ## Technology
* Ruby on rails
* React & Redux
* CSS
* AWS S3
  
## Functionality
This is the currently how the home page looks like:
users can user the filters to search for restaurants
![home page](https://github.com/zixlin7/aA_Homework/blob/master/ct%20-1.gif?raw=true)
  
they can apply filters on the list of restaurants:
![ ](https://github.com/zixlin7/aA_Homework/blob/master/ct%20-%202.gif?raw=true)
  
they can then make a reservation at the chosen time slot:
![ ](https://github.com/zixlin7/aA_Homework/blob/master/chef-3.gif?raw=true)
  
users can also review restaurants and update/delete their own reviews:
![ ](https://github.com/zixlin7/aA_Homework/blob/master/chef-4.gif?raw=true)
  
  
## Challenges
### Search/filters feature
#### Solution
  * Stored user's input for search and filters in UI slice of state. passed search query in AJAX call to backend to handle search and then filtering search results in the frontend.
 ```javascript
  export const updateSearch = (field, value) => (dispatch, getState) =>{
        dispatch(changeSearch(field, value));
        return (
            requestRestaurants(getState().ui.search)(dispatch)
            .then(res => dispatch(updateFilterRestaurants(resSelector(res.restaurants, getState().ui.filter))))
        )
};
 ```
    
  * real-time front-end filtering for cuisine and price range
```javascript
   const resSelector = (restaurants, cuisineFilter, priceFilter) => {
    const newRes ={};
    for (let key in restaurants) {
      if (cuisineFilter.length && priceFilter.length) {
        if (
          cuisineFilter.some((filter) => restaurants[key].cuisine === filter) &&
          priceFilter.some((filter) => restaurants[key].price_range === parseInt(filter))
        ) {
          newRes[key] = restaurants[key];
        }
      } else if (
        cuisineFilter.length &&
        cuisineFilter.some((filter) => restaurants[key].cuisine === filter)
      ) {
        newRes[key] = restaurants[key];
      } else if (
        priceFilter.length &&
        priceFilter.some((filter) => restaurants[key].price_range === parseInt(filter))
      ) {
        newRes[key] = restaurants[key];
      }
    }
    return newRes;
  }
  export default resSelector;      
};
 ```
### Timeslots for reservation

#### Solution
  * Generating time slots in front-end based on user's search input
  ```javascript
  getTimeSlots() {
    const { restaurant, search } = this.props;
    const searchTime = parseInt(search.time);
    const openTime = new Date(restaurant.open_hour).getHours();
    const closeTime = new Date(restaurant.close_hour).getHours();
    const timeSlots = [];
    for(let i = searchTime - 1; i <= searchTime + 1; i++){
      if (i >= openTime && i< closeTime){
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
  ```
   * Validate the availability for the timeslot user selected in the backend
  ```ruby
   def self.comfirm_availability(reservation)
        start_time = reservation.time - 2.hours
        end_time = reservation.time + 2.hours
        reservations = reservation.restaurant.reservations.where("time BETWEEN ? AND ?", start_time, end_time)
        number_of_people = reservations.to_a.reduce(0){|acc, ele| acc + ele.number_of_party}
        reservation.restaurant.capacity > (number_of_people + reservation.number_of_party)
   end
  ```
  
## Next Steps
* a wishlist feature that allows user to save restaurants to wishlist.
* build a side bar in restaurant show page which includes a map and reservation widget.
