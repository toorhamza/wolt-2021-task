import React, { FC, useEffect, useState } from "react";
import CardStyle from "./Style";
import PopularityBar from "./Popularitybar";
import { Blurhash } from "react-blurhash";
import { Restaurant } from "../../Types";

interface CardProps {
  restaurant: Restaurant;
}

const Card: FC<CardProps> = ({ restaurant }) => {
  const classes = CardStyle();
  const [stars, setStars] = useState<number>(0);

  const findNumberOfStars = (popularity: number) => {
    const calculation: number = (popularity * 100) / 20;
    const result: number = parseInt(calculation.toFixed(0));
    if (calculation > 4.5) {
      return 5;
    } else {
      return result;
    }
  };

  useEffect(() => {
    const findStars = findNumberOfStars(restaurant.popularity);
    setStars(findStars);
  }, [restaurant]);

  return (
    <div className={classes.card}>
      <div className={classes.image}>
        <Blurhash
          hash={restaurant.blurhash}
          width={350}
          height={250}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      </div>
      <div className={classes.flexContainer}>
        <div className={classes.title}>{restaurant.name}</div>
        <div className={classes.endItem}>
          <PopularityBar stars={stars} />
        </div>
      </div>
      <div className={classes.flexContainer}>
        <div
          className={classes.online}
          style={restaurant.online ? { color: "green" } : { color: "red" }}
        >
          {restaurant.online ? "Online" : "Offline"}
        </div>
      </div>
    </div>
  );
};

export default Card;
