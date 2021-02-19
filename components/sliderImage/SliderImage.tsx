import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';

export const SliderImage = () => {
  const [images, setImages] = useState(['Slider.png', 'Slider.png', 'Slider.png']);

  return (
    <Carousel infiniteLoop showThumbs={false} swipeable showStatus={false}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={`./slider/${image}`} alt="Imagen Slider" />
        </div>
      ))}
    </Carousel>
  );
};
