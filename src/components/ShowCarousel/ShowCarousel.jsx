/* eslint-disable react/prop-types */
import { Carousel } from "react-responsive-carousel";
import styles from "./ShowCarousel.module.scss";
import CarouselCard from "../CarouselCard/CarouselCard";
import { useNavigate } from "react-router-dom";

function ShowCarousel({ products }) {
  // const featuredProducts = products.products;

  const navigator = useNavigate();

  const onClickHandler = (index, item) => {
    const id = item.props.product.id;

    navigator("/products/" + id);
  };

  return (
    <>
      {products && (
        <Carousel
          infiniteLoop={true}
          useKeyboardArrows
          autoPlay={true}
          showThumbs={false}
          showStatus={false}
          showArrows={false}
          centerMode
          centerSlidePercentage={33.34}
          showIndicators={true}
          onClickItem={onClickHandler}
          className={styles.carousel__container}
        >
          {products &&
            products.map((product, index) => (
              <CarouselCard key={index} product={product} />
            ))}
        </Carousel>
      )}
    </>
  );
}

export default ShowCarousel;
