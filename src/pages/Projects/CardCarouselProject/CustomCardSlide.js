import PropTypes from "prop-types";
import { Slide, Image } from "pure-react-carousel";
import React from "react";
import { Card } from "semantic-ui-react";

const CustomCardSlide = ({ index, ...cardProps }) => (
  <Slide index={index}>
    <div style={{ padding: 10 }}>
      <Card fluid color="teal" raised>
        <Image src={cardProps.image} />
        <Card.Content>
          <Card.Header style={{ marginTop: "10px" }}>
            {cardProps.header}
          </Card.Header>
          <Card.Meta>{cardProps.meta}</Card.Meta>
          <Card.Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lorem
            leo, scelerisque a diam eu, tempus venenatis tortor. Duis non
            finibus ex. In mi nulla, bibendum ac dolor eget, faucibus.a
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
  </Slide>
);

CustomCardSlide.propTypes = {
  index: PropTypes.number.isRequired,
};

export default CustomCardSlide;
