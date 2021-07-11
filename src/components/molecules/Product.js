import React, { useState } from "react";
import Card from "../atoms/Card";
import Button from "../atoms/Button";
import Heart from "../atoms/Heart";

const Product = ({ title, description, price, image, favourite = false }) => {
  //const {title, description, price, image} = props;

  const [isFavourite, setIsFavourite] = useState(favourite)
  const toggleFavourite = ()=>{setIsFavourite(!isFavourite)}

  return (
    <Card>
      <div>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        {isFavourite ? <Heart></Heart> : null}
        <p>{price}€</p>
        <p>{description}</p>
        <Button
          text="View"
          label={`View ${title}`}
          onClick={() => {}}
          disabled={false}
        ></Button>
        <Button
          text={(isFavourite ? "Remove from" : "Add to") + " favourites"}
          onClick={toggleFavourite}
          disabled={false}
        ></Button>
      </div>
    </Card>
  );
};

export default Product;
