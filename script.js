const cityId = 279; // Seattle
const categoryId = 8; // Breakfast
const API_KEY = '3b26b8095534eabb0168c26dedd59660';
const requestURL = `https://developers.zomato.com/api/v2.1/search?entity_id=${cityId}&entity_type=city&count=12&category=${categoryId}`;
const requestURLRating = `https://developers.zomato.com/api/v2.1/search?entity_id=${cityId}&entity_type=city&count=12&category=${categoryId}&sort=rating`;

const request = new Request(requestURL, {
  headers: new Headers({
    'Accept': 'application/json',
    'user-key': `${API_KEY}` 
  })
});

const containerRestaurant = document.getElementById('restaurantContainer');

// Using a new request to fetch data. The new request includes API-key (user-key) and url (requestURL).
const basicRequest = () => {
  fetch(request) 
  .then(response => response.json())
  .then(json => {

    // Loops over each item in the array.      
    json.restaurants.forEach((data) => {
      containerRestaurant.innerHTML += generateHTMLForRestaurants(data);
    });
  });
};

basicRequest();

// Creates a second request for new URL
const requestTwo = new Request(requestURLRating, {
  headers: new Headers({
    'Accept': 'application/json',
    'user-key': `${API_KEY}` 
  })
});

const sortedRequest = () => {
  fetch(requestTwo) 
  .then(response => response.json())
  .then(json => {
    containerRestaurant.innerHTML = "";//clears the html content from basic array. Otherwise every click would generate 12 new resturants.
    
    json.restaurants.forEach((data) => {
      containerRestaurant.innerHTML += generateHTMLForRestaurants(data);//re-populates the html with sorted array
    });
  });
};

document.getElementById("topRatings").addEventListener("click", sortedRequest); 
      
const generateHTMLForRestaurants = data => {
  const restName = data.restaurant.name;
  const restAddress = data.restaurant.location.address;
  const restImage = data.restaurant.featured_image;
  const rating = data.restaurant.user_rating.aggregate_rating;
  const averageCost = data.restaurant.average_cost_for_two / 2;

  // And creates HTML code that is returned
  let createRestaurantHTML = '';    
  createRestaurantHTML += `<div class="restaurant-cards" id="restaurant-list">`;
  createRestaurantHTML += `<div class="restaurant-details">`;
  createRestaurantHTML += `<p class="rest-name" id="restaurantName">${restName}</p>`;
  createRestaurantHTML += `<p class="rest-address"><b>Address:</b> ${restAddress}</p>`;
  createRestaurantHTML += `<img src="${restImage}" class="rest-img">`;
  createRestaurantHTML += `<p class="rest-rating" id="rating"><b>Average rating:</b> ${rating} &#9733;&#9733;</p>`;
  createRestaurantHTML += `<p class="ave-cost" id="averageCost"><b>Average cost:</b> ${averageCost}$</p>`;
  createRestaurantHTML += `</div>`;
  createRestaurantHTML += `</div>`;
  return createRestaurantHTML
};

// const restart = () => { 
//   document.location.href = ""; 
// };

const reloadButton = () => { 
  location.reload(); 
};
    