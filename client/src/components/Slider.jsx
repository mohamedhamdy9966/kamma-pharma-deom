import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { assets } from "../assets/assets";

const Slider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <div className="flex justify-center items-center px-1 py-8">
      <div className="w-full max-w-6xl">
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {[
            assets.wash,
            assets.cream1,
            assets.sunScreen1,
            assets.wash1,
            assets.sunScreen2,
            assets.cream2,
            assets.sunScreen5,
            assets.creamMassage1,
            assets.sunScreen4,
            assets.creamMassage2,
            assets.sunScreen3,
            assets.cream3,
          ].map((src, index) => (
            <div className="p-4" key={index}>
              <img
                src={src}
                alt={`Item ${index + 1}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;
