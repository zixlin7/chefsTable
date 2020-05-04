
const resSelector = (restaurants, cuisineFilter, priceFilter) => {
    debugger
    let newRes ={};
    for (let key in restaurants) {
        if (cuisineFilter.length && priceFilter.length) {
            if (cuisineFilter.some(filter => Object.values(restaurants[key]).includes(filter))
                && priceFilter.some(filter => Object.values(restaurants[key]).includes(filter))) {
                newRes = Object.assign(newRes, restaurants[key])
            } else if (cuisineFilter.length && cuisineFilter.some(filter =>
                Object.values(restaurants[key]).includes(filter))) {
                newRes = Object.assign(newRes, restaurants[key])
            } else if (priceFilter.length && priceFilter.some(filter =>
                Object.values(restaurants[key]).includes(filter))) {
                newRes = Object.assign(newRes, restaurants[key])
            } else {
                newRes = restaurants
            }
        }
    }
    return newRes;
}

export default resSelector;