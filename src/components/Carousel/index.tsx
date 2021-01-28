import React, { FC, useState } from "react";
import { Restaurant } from "../../Types";
import Card from "../Card";
import CarouselStyles from "./CarouselStyles";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

interface CarouselProps {
  restaurants: Array<Restaurant>;
  title: string;
}

const Carousel: FC<CarouselProps> = ({ restaurants, title }) => {
  const classes = CarouselStyles();
  const [current, setCurrent] = useState(0);
  const [splitValue, setSplitValue] = useState(4);

  const length = restaurants.length;
  const lenghtIndex = length - 1

  const displayRestaurantsFunction = () => {
    if(length < 4 ) {
      return restaurants
    }

    console.log(current, "current")
    console.log(splitValue, "split")
  
    return restaurants.slice(current, splitValue)
  }

  const displayRestaurants:Array<Restaurant> = displayRestaurantsFunction()


  const nextSlide = ():void => {
   setCurrent((current + 1) > lenghtIndex - 4 ? 0 : current + 1);
   setSplitValue((splitValue + 1) > lenghtIndex ? 4 : (splitValue + 1))

  };

  const prevSlide = (): void => {
    setCurrent((current - 1) < 0 ? 0 : current - 1);
    setSplitValue((current - 1) < 0 ? 4 : splitValue - 1)

  };

  return (
    <section className={classes.mainContainer}>
         <h1>{title}</h1>
      <div className={classes.carouselContainer}>
        <button className={classes.leftButton} onClick={prevSlide}>
          <NavigateBeforeIcon />
        </button>
        {displayRestaurants.map((singleRestaurant) => (
          <div
            key={singleRestaurant.name}>
            <Card restaurant={singleRestaurant} />
          </div>
        ))}
        <button className={classes.rightButton} onClick={nextSlide}>
          <NavigateNextIcon />
        </button>
      </div>
    </section>
  );
};

export default Carousel;
