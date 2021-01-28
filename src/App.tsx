import React, {FC} from 'react';
import Navbar from "./components/Navbar"
import Carousel from "./components/Carousel"
import restaurants from "./data/discovery_page.json"
import {Restaurant} from "./Types"
import {ensure} from "./utils"

interface RestaurantFind {
  title: string;
  restaurants: Array<Restaurant>
}

const App: FC = () => {
  const popularRestaurants: RestaurantFind = ensure(restaurants.sections.find(i => i.title === "Popular Restaurants"))
  const newRestaurants: RestaurantFind = ensure(restaurants.sections.find(i => i.title === "New Restaurants"))
  const nearbyRestaurants: RestaurantFind = ensure(restaurants.sections.find(i => i.title === "Nearby Restaurants"))


  return (
    <div className="App">
      <Navbar />
      <Carousel restaurants={popularRestaurants.restaurants} title={popularRestaurants.title} />
      <Carousel restaurants={newRestaurants.restaurants} title={newRestaurants.title} />
      <Carousel restaurants={nearbyRestaurants.restaurants} title={nearbyRestaurants.title} />     
    </div>
  );
}

export default App;
