import React from "react";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "My first book",
    desription: "The first book i ever wrote"
  },
  {
    id: "p2",
    price: 6,
    title: "My first book",
    desription: "The first book i ever wrote"
  }
];
const Products = props => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(prdItem => (
          <ProductItem
            key={prdItem.id}
            id={prdItem.id}
            title={prdItem.title}
            price={prdItem.price}
            description={prdItem.desription}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
