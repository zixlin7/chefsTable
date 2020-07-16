const resSelector = (restaurants, filterState) => {
  const cuisineFilter = [];
  const priceFilter = [];
  for (let key in filterState) {
    if (filterState[key]) {
      key.length === 1 ? priceFilter.push(key) : cuisineFilter.push(key);
    }
  }

  const newRes = {};
  for (let key in restaurants) {
    if (cuisineFilter.length && priceFilter.length) {
      if (
        cuisineFilter.some((filter) => restaurants[key].cuisine === filter) &&
        priceFilter.some(
          (filter) => restaurants[key].price_range === parseInt(filter)
        )
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
      priceFilter.some(
        (filter) => restaurants[key].price_range === parseInt(filter)
      )
    ) {
      newRes[key] = restaurants[key];
    }
  }
  return newRes;
};

export default resSelector;
