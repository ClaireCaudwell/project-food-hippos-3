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
    json.restaurants.forEach(data => { // loops over each item in the array.
      console.log(data.restaurant.name); // returns and prints the array's names to the console.
      document.getElementById("restaurants").innerHTML += //fetches, returns and outputs specified features from the API in html.
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
    });
  });

  console.log(data.restaurant);

  /*const getsPlaceholderImage = () => {
    const featuredImage = data.restaurant.featured_image;
    if (featuredImage) 
    return featuredImage 
   } else 
    return (url) // subtitute image
    
  } */