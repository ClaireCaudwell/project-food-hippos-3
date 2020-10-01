const cityId = 279; // Seattle
const categoryId = 8; // Breakfast
const API_KEY = '3b26b8095534eabb0168c26dedd59660';
const requestURL = `https://developers.zomato.com/api/v2.1/search?entity_id=${cityId}&entity_type=city&count=12&category=${categoryId}`;

const request = new Request(requestURL, {
    headers: new Headers({
      'Accept': 'application/json',
      'user-key': `${API_KEY}` 
    })
  });
// Added new variable const containerRestaurant.
// Changed restaurantAddress to containerRestaurant in the forEach.
  const containerRestaurant = document.getElementById('restaurantContainer');

// Using a new request to fetch data. The new request includes API-key (user-key) and url (requestURL).
  fetch(request) 
    .then(response => response.json())
    .then(json => {

    console.log(json); // prints array to console
      //json.restaurants.forEach(data => { // loops over each item in the array.      
      json.restaurants.forEach((data) => {
        containerRestaurant.innerHTML += generateHTMLForForecast(data);
      });
    });
      
  const generateHTMLForForecast = data => {
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
  
  /*const getsPlaceholderImage = () => {
    const featuredImage = data.restaurant.featured_image;
    if (featuredImage) 
    return featuredImage 
   } else 
    return (url) // subtitute image
    
  } */

  /*document.getElementById("restaurant-list").innerHTML += //fetches, returns and outputs specified features from the API in html.
      `<li>

      ${data.restaurant.name}
      ${data.restaurant.location.address} 
      ${data.restaurant.cuisines} 
      ${data.restaurant.establishment} 
      ${data.restaurant.user_rating.aggregate_rating}
      ${data.restaurant.average_cost_for_two}
      ${data.restaurant.average_cost_for_two / 2}
      ${data.restaurant.price_range} 
      ${data.restaurant.featured_image}

      </li> 
      <div style="width: 100px; height: 100px; 
      })" </div>`;
*/
    