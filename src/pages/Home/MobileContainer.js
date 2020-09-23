import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import { Container, Sidebar, Menu, Segment, Icon } from "semantic-ui-react";
import HomepageHeading from "../../components/HomepageHeading";

const MobileContainer = ({ children, Media }) => {
  const [sidebarOpened, setSidebarOpened] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const handleToggle = () => {
    setSidebarOpened(true);
  };

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
    <Media as={Sidebar.Pushable} at="mobile">
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation="overlay"
          inverted
          onHide={() => setSidebarOpened(false)}
          vertical
          visible={sidebarOpened}
        >
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
            to="/about"
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
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 350, padding: "1em 0em" }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size="large">
                <Menu.Item onClick={handleToggle}>
                  <Icon name="sidebar" />
                </Menu.Item>
              </Menu>
            </Container>
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
      <HomepageHeading mobile />
    </Media>
  );
};
MobileContainer.propTypes = {
  children: PropTypes.node,
};

export default MobileContainer;
