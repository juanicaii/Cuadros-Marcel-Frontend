import styles from "./SliderImage.module.css";
import { useState } from "react";
import React from "react";
import Product from "../product";
import Carousel from "react-multi-carousel";

export const SliderProducts = () => {
  const products = [
    {
      name: "Mirando el mar",
      image: "image 1.png",
    },
    {
      name: "Mirando el mar",
      image: "image 1.png",
    },
    {
      name: "Mirando el mar",
      image: "image 1.png",
    },
    {
      name: "Mirando el mar",
      image: "image 1.png",
    },
    {
      name: "Mirando el mar",
      image: "image 1.png",
    },
  ];
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1230 },
      items: 4,
    },
    superLarge: {
      breakpoint: { max: 1230, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    Minitablet: {
      breakpoint: { max: 950, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 662, min: 0 },
      items: 1,
    },
  };
  return (
    <div style={{ margin: "0 20px" }}>
      <Carousel responsive={responsive}>
        {products.map((product, index) => (
          <Product key={index} name={product.name} image={product.image} />
        ))}
      </Carousel>
    </div>
  );
};
