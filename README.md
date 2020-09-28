# Build a Food Review website 🌮🥑

During this week we will meet-up in Sthlm – YAY! During those days we will practice our JavaScript and API skills a bit more. We will also practice working as a real team using GitHub. You will experience, first-hand, the issues and struggles that can occur when working together with code. 

During the session your team will be challenged to build a website that lists restaurants, reviews and information based on location – YUM 😋. 

Your page will be built based on a random combination of cuisine, city, and design provided by the Technigo team on site. All data should be fetched from the [Zomato API.](https://developers.zomato.com/)  

## Your team's combination: [cuisine] restaurants in [city]

Your team has been tasked with using the Zomato API to list [cuisine] restaurants in [city]

## How to complete this task

We have a very limited time-frame for this project, so we want you to read about the Zomato API and experiment making requests to the `/search` endpoint before we meet up. This way, when you all meet in Stockholm and get assigned your cuisine, location and design, you'll be ready to get going quickly. 

*The following steps should be done during the meet-up:* 

### Step 1

Each member of your team should clone (NOT FORK!) the correct repo for your team.

### Step 2

Togeteher as a mob, do the foundations of the project together. Make sure that you have fetched from the API and presented all data on the page in a suitable HTML structure which you all agree on. You can also use one person's code from the practices as long as **everyone** understands the code. No styling is needed at this point. 

You should now have data from at least 10 restaurants from the `/search` endpoint on your page, and include the following data: 

* The restaurant name
* The average cost for a dinner there
* The address of the restaurant
* An image (you choose which image you'd like to display from the response)
* Either the `aggregate_rating` or the `rating_text` for that restaurant

### Step 3 

Divide into pairs or groups of three and choose freely from the selection of features below. The groups will work separatley on features in their own "feature branch" and we will help you to merge this into the master branch before the demo. Of course; have communication within the group and feel free to merge and commit code when you feel that the time is right. Help each-other and share knowledge in the team is always encouraged. 

### Features

Below are suggestions for features for your site. You're free to choose the ones which are interesting to your team to implement: 

**🎨Implement the randomly given design.**

You don't need to implement all sections (if there's any that is not relevant to your site) but try and copy the page look and feel and design details. Feel free to make text, logo and other things your own – it's a tribute, not an exact copy.

**💰Filter on price range** 

Add so that your users can filter restaurants based on different price ranges. 

**🚀Sort on price** 

Add so that your users can sort the resturants on price, cheap to expensive using the `average_cost_for_two` parameter. 

**💬List reviews** 

List the 3 latest reviews for each restaurant. 

**💬Filter on delivery options** 

Make it so your users can choose to only show resturants which have delivery (`has_online_delivery`) or can be booked in advance (`has_table_booking`). 

**🖼Filter on reviews**

Make it so your users can choose to only show restaurants with good ratings.

**📱Make the page responsive**

To work on mobile, desktop or tablet. 

Feel free to challenge yourself and team to come up with more or other features! This is your group project – you decided. 

### Feature freeze 

There's a thing called [feature freeze.](https://en.wikipedia.org/wiki/Freeze_(software_engineering)), our feature freeze will be 2 hours before the demo. That's when it's time for you to merge your feature branches into the master branch. Our teachers will have a bit of a though time, since it's guaranteed there will be conflicts in your code (which happens when the same code is edited in two different branches). So expect merge conflicts at this point!

Once all the feature branches are merged into master, you're free to try and make smaller changes to your site and fix bugs - but be careful to make sure it'll be demoable. 

Work as a team!  

Good luck! 
