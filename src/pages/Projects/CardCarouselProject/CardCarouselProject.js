import {
  ButtonBack,
  CarouselProvider,
  Slider,
  Slide,
  ButtonNext,
  Image,
} from "pure-react-carousel";
import { Icon } from "semantic-ui-react";
import React from "react";

// import CustomCardSlide from "./CustomCardSlide";
import CustomDotGroup from "./CustomDotGroup";

const buttonStyle = {
  border: "none",
  background: "#f8f8ff",
  color: "#b38cb4",
};

const CardCarousel = ({ images }) => (
  <CarouselProvider
    naturalSlideWidth={1.25}
    naturalSlideHeight={1}
    totalSlides={images.length}
    style={{ maxWidth: "500px", marginRight: "2em" }}
    infinite
  >
    <Slider>
      {images.map((img, i) => (
        <Slide key={i} tag="a" index={i}>
          <Image src={img} />
        </Slide>
      ))}
    </Slider>
    <div style={{ display: "flex", marginTop: "15px" }}>
      <ButtonBack style={buttonStyle}>
        <Icon name="arrow left" size="large" />
      </ButtonBack>
      <CustomDotGroup slides={images.length} />
      <ButtonNext style={buttonStyle}>
        <Icon name="arrow right" size="large" />
      </ButtonNext>
    </div>
  </CarouselProvider>
);

export default CardCarousel;
