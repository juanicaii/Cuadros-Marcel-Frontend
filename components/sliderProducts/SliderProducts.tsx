import Carousel from 'react-multi-carousel';
import Product from '../product';

interface IProducts {
  products: {
    results: Array<{
      id: Number;
      name: String;
      img: String;
      stock: Number;
      sizeId: Array<{}>;
      categoryId: Array<{}>;
    }>;
  };
}
export const SliderProducts = ({ products }: IProducts) => {
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
    <div style={{ margin: '0 20px' }}>
      <Carousel responsive={responsive}>
        {products.results.map((product) => (
          <Product
            key={product.name}
            name={product.name}
            image={product.img}
            stock={product.stock}
            sizes={product.sizeId}
            categories={product.categoryId}
          />
        ))}
      </Carousel>
    </div>
  );
};
