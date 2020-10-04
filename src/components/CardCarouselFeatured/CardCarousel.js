import {
  ButtonBack,
  CarouselProvider,
  Slider,
  ButtonNext,
} from "pure-react-carousel";
import { Icon } from "semantic-ui-react";
import React from "react";

import CustomCardSlide from "./CustomCardSlide";
import CustomDotGroup from "./CustomDotGroup";

const buttonStyle = {
  border: "none",
  background: "#f8f8ff",
  color: "#b38cb4",
};

const CardCarousel = () => (
  <CarouselProvider
    naturalSlideWidth={1.25}
    naturalSlideHeight={1}
    totalSlides={10}
    style={{ width: "600px" }}
    infinite
  >
    <Slider>
      <CustomCardSlide
        image={require("../../img/projects/LocalBiz/project_7_1.png")}
        index={0}
        header="Home Page"
        meta="Browse local businesses or filter by category"
        description="Users can choose from many different categories of businesses"
      />
      <CustomCardSlide
        header="Business Detail Page"
        image={require("../../img/projects/LocalBiz/project_7_3.png")}
        index={1}
        meta="View the description, hours, location and items of a business"
        description="Customers can find all of the important info about a business here"
      />
      <CustomCardSlide
        header="Edit Business Details"
        image={require("../../img/projects/LocalBiz/project_7_2.png")}
        index={2}
        meta="Business owners can edit their business details"
        description="When the business owner is logged in, the edit and delete options appear. API routes are also protected."
      />
      <CustomCardSlide
        header="Send a message about an item..."
        image={require("../../img/projects/LocalBiz/project_7_4.png")}
        index={3}
        meta="Customers can message the business owner about an item"
        description="A customer may inquire about a specific item using this feature"
      />
      <CustomCardSlide
        header="Edit Item Details"
        image={require("../../img/projects/LocalBiz/project_7_5.png")}
        index={4}
        meta="Business owners can edit the details or photo of an item"
        description="A custom modal contains the form and preloads the existing item data upon opening"
      />
      <CustomCardSlide
        header="Edit Business Hours"
        image={require("../../img/projects/LocalBiz/project_7_6.png")}
        index={5}
        meta="Business owners can edit their operating hours with a custom form"
        description="Large select and checkbox components were used as well as an intuitive layout"
      />
      <CustomCardSlide
        header="Edit Business Location"
        image={require("../../img/projects/LocalBiz/project_7_7.png")}
        index={6}
        meta="Business owners can edit their map location with a custom picker tool"
        description="Street adresses are often ambiguous in Siem Reap, so a map location is more useful.  A user can edit their location by simply clicking and dragging a pin on the map"
      />
      <CustomCardSlide
        header="Message Center"
        image={require("../../img/projects/LocalBiz/project_7_8.png")}
        index={7}
        meta="Buyers and sellers can communicate in a custom built messaging center"
        description="Each conversation is kept separate by user, but can contain multiple items across multiple businesses"
      />
      <CustomCardSlide
        header="Message Center"
        image={require("../../img/projects/LocalBiz/project_7_11.png")}
        index={8}
        meta="Users can own multiple businesses and their messages will be kept separate by item"
        description="The message center was designed with the intention of making life easier for the business owner"
      />
      <CustomCardSlide
        header="Sign In and Sign Up"
        image={require("../../img/projects/LocalBiz/project_7_9.png")}
        index={9}
        meta="Login with Facebook or Email & Custom Form Validation with Formik"
        description="The app can detect which sign up method was originally used and prompt the user to sign in with that method"
      />
    </Slider>
    <div
      style={{ display: "flex", justifyContent: "center" }}
      className="hide-on-tablet"
    >
      <ButtonBack style={buttonStyle}>
        <Icon name="arrow left" size="large" />
      </ButtonBack>
      <CustomDotGroup slides={10} />
      <ButtonNext style={buttonStyle}>
        <Icon name="arrow right" size="large" />
      </ButtonNext>
    </div>
  </CarouselProvider>
);

export default CardCarousel;
