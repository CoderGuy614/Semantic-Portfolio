import React from "react";
import PropTypes from "prop-types";
import {
  Container,
  Header,
  Button,
  Icon,
  Segment,
  Grid,
} from "semantic-ui-react";
import image1 from "../img/background.jpg";

const HomepageHeading = ({ mobile }) => {
  return (
    <Container
      fluid
      style={{
        backgroundImage: `url("../img/background.jpg")`,
        backgroundSize: "cover",
      }}
    >
      <Grid centered>
        <Header
          as="h1"
          content="Jonny Lutz"
          style={{
            fontSize: mobile ? "2em" : "4em",
            fontWeight: "normal",
            marginBottom: 0,
            marginTop: "1.0em",
          }}
        />
        <Header
          as="h2"
          content="Full Stack JavaScript Developer"
          style={{
            fontSize: mobile ? "1.5em" : "1.7em",
            fontWeight: "normal",
            marginTop: "1.0em",
          }}
        />

        <Button secondary size="huge">
          See My Projects
          <Icon name="right arrow" />
        </Button>
      </Grid>
    </Container>
  );
};

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
};

export default HomepageHeading;
