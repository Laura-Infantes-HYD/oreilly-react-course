import React, { useState } from "react";
import Product from "../molecules/Product";
import productsArray from "../../mockData";

const ProductList = ({searchTerm}) => {
  const [products/* , setproducts */] = useState(productsArray);

  return (
    <div>
      {products.map(({ title, description, price, image }, i) => 
        <div>
          <p>{searchTerm}</p>
          <p>{title.indexOf(searchTerm) < 0}</p>
          <Product
            key={i}
            title={title}
            description={description}
            price={price}
            image={image}
          />
        </div>
      )}
    </div>
  );
};

export default ProductList;
