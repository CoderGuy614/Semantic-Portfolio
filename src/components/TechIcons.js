import React from "react";
import { Header, Segment, Image } from "semantic-ui-react";

const iconContainerStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
};

const iconStyle = {
  maxWidth: "50px",
  margin: "1em",
};

const iconStyleBack = {
  maxWidth: "75px",
  margin: "1em",
};

const iconStyleDev = {
  maxWidth: "100px",
  margin: "1em",
};

const TechIcons = () => {
  return (
    <>
      <Header className="primaryColor" textAlign="center">
        {" "}
        Front End Technologies
      </Header>
      <Segment style={iconContainerStyle}>
        <Image style={iconStyle} src={require("../img/html.png")} />
        <Image style={iconStyle} src={require("../img/css.png")} />
        <Image style={iconStyle} src={require("../img/js.png")} />
        <Image style={iconStyle} src={require("../img/react2.jpg")} />
        <Image style={iconStyle} src={require("../img/sass.png")} />
        <Image style={iconStyle} src={require("../img/reactBootstrap.png")} />
      </Segment>
      <Header className="primaryColor" textAlign="center">
        {" "}
        Back End Technologies
      </Header>
      <Segment style={iconContainerStyle}>
        <Image style={iconStyleBack} src={require("../img/mongo.png")} />
        <Image style={iconStyleBack} src={require("../img/mysql.png")} />
        <Image style={iconStyleBack} src={require("../img/node.png")} />
        <Image style={iconStyleDev} src={require("../img/express.png")} />
      </Segment>
      <Header className="primaryColor" textAlign="center">
        Development Tools
      </Header>
      <Segment style={iconContainerStyle}>
        <Image style={iconStyleDev} src={require("../img/postman.png")} />
        <Image style={iconStyleDev} src={require("../img/git.png")} />

        <Image style={iconStyle} src={require("../img/terminal.png")} />
      </Segment>
    </>
  );
};

export default TechIcons;
