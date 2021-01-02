import styles from "./SliderImage.module.css";
import { useState } from "react";
import React from "react";

import { Carousel } from "react-responsive-carousel";

export const SliderImage = () => {
  const [images, setImages] = useState([
    "Slider.png",
    "Slider.png",
    "Slider.png",
  ]);

  return (
    <Carousel
      infiniteLoop={true}
      showThumbs={false}
      swipeable={true}
      showStatus={false}
    >
      {images.map((image, index) => (
        <div key={index}>
          <img src={`./slider/${image}`} />
        </div>
      ))}
    </Carousel>
  );
};
