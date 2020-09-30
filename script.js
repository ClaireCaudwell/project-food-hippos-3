const cityId = 279; // Seattle
const categoryId = 8; // Breakfast
const API_KEY = '3b26b8095534eabb0168c26dedd59660';
//const requestURL = `https://developers.zomato.com/api/v2.1/search?entity_id=${cityId}&entity_type=city&category=${categoryId}`;
const requestURL = `https://developers.zomato.com/api/v2.1/search?entity_id=${cityId}&entity_type=city&count=10&category=${categoryId}`;

//const requestURL2 = `https://developers.zomato.com/api/v2.1/search?entity_id=${cityId}&entity_type=city&cuisines=${cuisineId}`;

const request = new Request(requestURL, {
    headers: new Headers({
      'Accept': 'application/json',
      'user-key': `${API_KEY}` 
    })
  });

// Using a new request to fetch data. The new request includes API-key (user-key) and url (requestURL).
  fetch(request) 
    .then(response => response.json())
    .then(json => {

    console.log(json); // prints array to console
    //json.restaurants.forEach(data => { // loops over each item in the array.
      //console.log(data.restaurant.name); // returns and prints the array's names to the console.
      
      json.restaurants.forEach((data) => {
        restaurantAddress.innerHTML += generateHTMLForForecast(data);
      });
    });
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
    


  const generateHTMLForForecast = data => {
    const restName = data.restaurant.name;
    const restAddress = data.restaurant.location.address;
    const restImage = data.restaurant.featured_image;
    const rating = data.restaurant.user_rating.aggregate_rating;
    const averageCost = data.restaurant.average_cost_for_two / 2;
 

    // And creates HTML code that is returned
    let createRestaurantHTML = '';
    createRestaurantHTML += `<div class="restaurant-container">`;
    createRestaurantHTML += `<p>${restName}</p>`;
    createRestaurantHTML += `<p>${restAddress}</p>`;
    createRestaurantHTML += `<img src="${restImage}">`;
    createRestaurantHTML += `<p>${rating}</p>`;
    createRestaurantHTML += `<p>${averageCost}</p>`;
    createRestaurantHTML += `</div>`;
    return createRestaurantHTML
  };
  

  //console.log()

  /*const getsPlaceholderImage = () => {
    const featuredImage = data.restaurant.featured_image;
    if (featuredImage) 
    return featuredImage 
   } else 
    return (url) // subtitute image
    
  } */