import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";


type PopularityProps = { stars: number };

// This time I did not use FC type because I have been reading it's better not to use it.

const PopularityBar = ({ stars }: PopularityProps) => {
// A bit complicated algorithm but I chose this to use ES6 map function and not the older loops
// New array generate with length of 5. In the array all the values 5 are returning colored icon 
// and the values with 0 are returning border icon.
    const newArray: Array<number> = Array.from({length: 5}, (_, i) => {
      if(i < stars) {return 5}
      else {return 0}
  })

  return (
    <>
      {newArray.map((arr, index) => {
        if (index <= arr) {
          return <FavoriteIcon />
        } else {
            return <FavoriteBorderIcon />
        }
      })}
    </>
  );
};

export default PopularityBar;
