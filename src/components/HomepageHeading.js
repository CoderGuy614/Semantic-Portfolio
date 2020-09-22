import React from "react";
import PropTypes from "prop-types";
import { Container, Header, Button, Icon } from "semantic-ui-react";

const HomepageHeading = ({ mobile }) => {
  return (
    <Container text>
      <Header
        as="h1"
        content="Jonny Lutz"
        inverted
        style={{
          fontSize: mobile ? "2em" : "4em",
          fontWeight: "normal",
          marginBottom: 0,
          marginTop: mobile ? "1.5em" : "1.25em",
        }}
      />
      <Header
        as="h2"
        content="Full Stack JavaScript Developer"
        inverted
        style={{
          fontSize: mobile ? "1.5em" : "1.7em",
          fontWeight: "normal",
          marginTop: mobile ? "0.5em" : "1.5em",
        }}
      />

      <Button secondary size="huge">
        See My Projects
        <Icon name="right arrow" />
      </Button>
    </Container>
  );
};

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
};

export default HomepageHeading;
