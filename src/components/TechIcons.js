import React from "react";
import { Header, Segment, Image } from "semantic-ui-react";

const iconContainerStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
};

const iconStyleS = {
  maxWidth: "50px",
  margin: "1em",
};

const iconStyleM = {
  maxWidth: "75px",
  margin: "1em",
};

const iconStyleL = {
  maxWidth: "100px",
  margin: "1em",
};

const iconStyleXL = {
  maxWidth: "125px",
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
        <Image style={iconStyleS} src={require("../img/html.png")} />
        <Image style={iconStyleS} src={require("../img/css.png")} />
        <Image style={iconStyleS} src={require("../img/js.png")} />
        <Image style={iconStyleS} src={require("../img/react2.jpg")} />
        <Image style={iconStyleS} src={require("../img/sass.png")} />
        <Image style={iconStyleS} src={require("../img/reactBootstrap.png")} />
      </Segment>
      <Header className="primaryColor" textAlign="center">
        {" "}
        Back End Technologies
      </Header>
      <Segment style={iconContainerStyle}>
        <Image style={iconStyleL} src={require("../img/mongo.png")} />
        <Image style={iconStyleM} src={require("../img/mysql.png")} />
        <Image style={iconStyleM} src={require("../img/node.png")} />
        <Image style={iconStyleL} src={require("../img/express.png")} />
      </Segment>
      <Header className="primaryColor" textAlign="center">
        Development Tools
      </Header>
      <Segment style={iconContainerStyle}>
        <Image style={iconStyleL} src={require("../img/postman.png")} />
        <Image style={iconStyleL} src={require("../img/git.png")} />
        <Image style={iconStyleXL} src={require("../img/vscode.png")} />
        <Image style={iconStyleS} src={require("../img/mocha.png")} />
        <Image style={iconStyleM} src={require("../img/npm.png")} />
      </Segment>
    </>
  );
};

export default TechIcons;
