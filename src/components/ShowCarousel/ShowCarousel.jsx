/* eslint-disable react/prop-types */
import { Carousel } from "react-responsive-carousel";
import styles from "./showCarousel.module.scss";
import CarouselCard from "../CarouselCard/CarouselCard";
import { useNavigate } from "react-router-dom";

function ShowCarousel({ products }) {
  console.log("im in show carousel");
  console.log("receieved ", products);

  // const featuredProducts = products.products;

  const navigator = useNavigate();

  const onClickHandler = (index, item) => {
    const id = item.props.product.id;
    //console.log("test ", item.props.product.id);
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
