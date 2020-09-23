import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import { Container, Visibility, Menu, Segment } from "semantic-ui-react";
import HomepageHeading from "../../components/HomepageHeading";

const DesktopContainer = ({ children, Media }) => {
  const [fixed, setFixed] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  const handleItemClick = (e, { name }) => setActiveItem(name);

  useEffect(() => {
    if (window.location.pathname === "/" && activeItem !== "home") {
      setActiveItem("home");
    } else if (
      window.location.pathname === "/about" &&
      activeItem !== "about"
    ) {
      setActiveItem("about");
    } else if (
      window.location.pathname === "/projects" &&
      activeItem !== "projects"
    ) {
      setActiveItem("projects");
    } else if (
      window.location.pathname === "/contacts" &&
      activeItem !== "contacts"
    ) {
      setActiveItem("contacts");
    }
  }, [activeItem]);

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
              <Menu.Item
                name="home"
                active={activeItem === "home"}
                onClick={handleItemClick}
                as={NavLink}
                to="/"
                exact
              >
                Home
              </Menu.Item>
              <Menu.Item
                name="projects"
                active={activeItem === "projects"}
                onClick={handleItemClick}
                as={NavLink}
                to="/projects"
                exact
              >
                Projects
              </Menu.Item>
              <Menu.Item
                name="about"
                active={activeItem === "about"}
                onClick={handleItemClick}
                as={NavLink}
                to="about"
                exact
              >
                About
              </Menu.Item>
              <Menu.Item
                name="contact"
                active={activeItem === "contact"}
                onClick={handleItemClick}
                as={NavLink}
                to="contact"
                exact
              >
                Contact
              </Menu.Item>
            </Container>
          </Menu>
          <HomepageHeading />
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
