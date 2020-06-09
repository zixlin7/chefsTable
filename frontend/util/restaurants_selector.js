
const resSelector = (restaurants, filterState) => {
    const cuisineFilter = [];
    const priceFilter = [];
    for (let key in filterState) {
        if (filterState[key]) {
            if (key.length === 1) {
                priceFilter.push(key)
            } else {
                cuisineFilter.push(key)
            }

        }
    }
    
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