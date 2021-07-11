import React, { useState } from "react";
import Product from "../molecules/Product";
import productsArray from "../../mockData";

const ProductList = () => {
  const [products, setproducts] = useState(productsArray);

  return (
    <div>
      {products.map(({ title, description, price, image }) => (
        <Product
          title={title}
          description={description}
          price={price}
          image={image}
        />
      ))}
    </div>
  );
};

export default ProductList;
