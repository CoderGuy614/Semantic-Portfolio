import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import { Container, Visibility, Segment } from "semantic-ui-react";
import HomepageHeading from "../../components/HomepageHeading";
import Menu2 from "../../components/Menu2";

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
          <Menu2
            activeItem={activeItem}
            fixed={fixed}
            handleItemClick={handleItemClick}
          />
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
