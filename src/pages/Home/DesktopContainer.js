import React, { useState } from "react";
import PropTypes from "prop-types";

import { Container, Visibility, Menu, Segment } from "semantic-ui-react";

const DesktopContainer = ({ children, Media }) => {
  const [fixed, setFixed] = useState(false);
  return (
    <Media greaterThan="mobile">
      <Visibility
        once={false}
        onBottomPassed={() => setFixed(true)}
        onBottomPassedReverse={() => setFixed(false)}
      >
        <Segment
          textAlign="center"
          style={{
            minHeight: 450,
            padding: "1em 0em",
            backgroundImage: `url("https://picsum.photos/200")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          vertical
          inverted
        >
          <Menu
            fixed={fixed ? "top" : null}
            inverted={!fixed}
            pointing={!fixed}
            secondary={!fixed}
            size="large"
          >
            <Container>
              <Menu.Item as="a">Home</Menu.Item>
              <Menu.Item as="a" active>
                Projects
              </Menu.Item>
              <Menu.Item as="a">About</Menu.Item>
              <Menu.Item as="a">Contact</Menu.Item>
            </Container>
          </Menu>
        </Segment>
      </Visibility>

      {children}
    </Media>
  );
};

DesktopContainer.propTypes = {
  children: PropTypes.node,
};

export default DesktopContainer;
