import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Container, Menu, Icon } from "semantic-ui-react";

const friendOptions = [
  { text: "", value: "" },
  { text: "Option1" },
  { text: "Option2" },
];

const socialMenuStyle = {
  display: "flex",
  justifyContent: "center",
};

const socialMenuIconStyle = {
  marginRight: "0px !important",
};

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
    <Menu className="bg-secondaryColor" fixed="top" size="large">
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

      <Menu.Menu position="right" style={socialMenuStyle}>
        <Menu.Item
          href="https://www.facebook.com/people/Jonny-Lutz/12450996"
          target="_blank"
        >
          <Icon
            name="facebook"
            style={{ marginRight: "0px !important", color: "#4267B2" }}
            size="large"
          />
        </Menu.Item>
        <Menu.Item
          href="https://www.linkedin.com/in/jonathan-tyler-lutz/"
          target="_blank"
        >
          <Icon
            name="linkedin"
            size="large"
            style={{
              marginRight: "0px !important",
              color: "#0072b1",
            }}
          />
        </Menu.Item>
        <Menu.Item href="http://github.com/coderguy614" target="_blank">
          <Icon
            name="github"
            size="large"
            style={{
              marginRight: "0px !important",
              color: "black",
            }}
          />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default Navigation;
