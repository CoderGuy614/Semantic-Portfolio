import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Container, Menu, Icon } from "semantic-ui-react";
const Navigation = () => {
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
    <Menu fixed="top" size="large" color="teal">
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
          to="/contact"
          exact
        >
          Contact
        </Menu.Item>
      </Container>
      <Container>
        <Menu.Item
          as="a"
          to="http://facebook.com"
          icon="facebook"
          position="right"
        ></Menu.Item>
        <Menu.Item
          as="a"
          to="http://linkedin.com"
          icon="linkedin"
          position="right"
        ></Menu.Item>
        <Menu.Item
          as="a"
          to="http://github.com"
          icon="github"
          position="right"
        ></Menu.Item>
      </Container>
    </Menu>
  );
};

export default Navigation;
