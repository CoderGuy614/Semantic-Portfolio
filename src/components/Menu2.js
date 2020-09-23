import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";
const Menu2 = ({ fixed, activeItem, handleItemClick }) => {
  return (
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
  );
};

export default Menu2;
