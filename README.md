# README

chef's Table is a full-stack project inspired by Opentable. It's a platform that people can view a list of restaurants featured in Netflix's show Chef's Table and make reservations based on availability.
  
  ## Technology
* Ruby on rails
* React & Redux
* CSS
* AWS S3
  
## Functionality
This is the currently how the home page looks like:
users can user the filters to search for restaurants
![home page](https://github.com/zixlin7/aA_Homework/blob/master/chef-1.gif?raw=true)
  
they can apply filters on the list of restaurants:
![ ](https://github.com/zixlin7/aA_Homework/blob/master/chef-2.gif?raw=true)
  
they can then make a reservation at the chosen time slot:
![ ](https://github.com/zixlin7/aA_Homework/blob/master/chef-3.gif?raw=true)
  
users can also review restaurants and update/delete their own reviews:
![ ](https://github.com/zixlin7/aA_Homework/blob/master/chef-4.gif?raw=true)
  
  
## Challenges
### Search/filters feature
#### Solution
  * Stored user's input for search in UI slice of state and passed it in AJAX call to handle search for location/availability in the backend
 ```javascript
    const changeSearch = (field, value) => ({
    type: UPDATE_SEARCH,
    field,
    value
});
    export const updateSearch = (field, value) => (dispatch, getState) => {
        dispatch(changeSearch(field, value));
        return requestRestaurants(getState().ui.search)(dispatch);  
};
 ```
    
  * implemented front-end filtering for cuisine and price range
```javascript
   const resSelector = (restaurants, cuisineFilter, priceFilter) => {
    const newRes ={};
    for (let key in restaurants) {
        if (cuisineFilter.length && priceFilter.length) {
            if (cuisineFilter.some(filter => Object.values(restaurants[key]).includes(filter))
                && priceFilter.some(filter => Object.values(restaurants[key]).includes(parseInt(filter)))) {   
                    newRes[key] = restaurants[key]
                }
        } else if (cuisineFilter.length && cuisineFilter.some(filter =>
        Object.values(restaurants[key]).includes(filter))) {
            newRes[key] = restaurants[key]
        } else if (priceFilter.length && priceFilter.some(filter =>
            Object.values(restaurants[key]).includes(parseInt(filter)))) {
            newRes[key] = restaurants[key]
        } 
    }
    return newRes;
}
export default resSelector;      
};
 ```
### Timeslots for reservation
#### Solution
  ```javascript
  getTimeSlots() {
    const searchTime = parseInt(this.props.search.time);
    const openTime = new Date(this.props.restaurant.open_hour).getHours();
    const closeTime = new Date(this.props.restaurant.close_hour).getHours();
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
  ```
  
## Next Steps
* build recommendations at front page.
* wishlist feature which allows user to save restaurants to wishlist.
* build a side bar in restaurant show page which includes a map and reservation widget.
