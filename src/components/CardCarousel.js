import {
  ButtonBack,
  CarouselProvider,
  Slider,
  ButtonNext,
} from "pure-react-carousel";
import { Icon } from "semantic-ui-react";
import React from "react";

import CustomCardSlide from "../components/CustomCardSlide";
import CustomDotGroup from "../components/CustomDotGroup";

const buttonStyle = {
  border: "none",
  background: "#f8f8ff",
  color: "#b38cb4",
};

const CardCarousel = () => (
  <CarouselProvider
    naturalSlideWidth={1}
    naturalSlideHeight={1.25}
    totalSlides={3}
    style={{ width: "300px" }}
    infinite
  >
    <Slider>
      <CustomCardSlide
        image="https://place-hold.it/800x800&text=Matthew&fontsize=32"
        index={0}
        header="Matthew House"
        meta="Friend"
      />
      <CustomCardSlide
        header="Elliot Baker"
        image="https://place-hold.it/800x800&text=Elliot&fontsize=32"
        index={1}
        meta="Friend"
      />
      <CustomCardSlide
        header="Steve Sanders"
        image="https://place-hold.it/800x800&text=Steve&fontsize=32"
        index={2}
        meta="Friend"
      />
    </Slider>
    <div style={{ display: "flex" }}>
      <ButtonBack style={buttonStyle}>
        <Icon name="arrow left" size="large" />
      </ButtonBack>
      <CustomDotGroup slides={3} />
      <ButtonNext style={buttonStyle}>
        <Icon name="arrow right" size="large" />
      </ButtonNext>
    </div>
  </CarouselProvider>
);

export default CardCarousel;
