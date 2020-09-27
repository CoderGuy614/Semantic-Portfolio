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
        <Image style={iconStyleS} src={require("../img/tech-icons/html.png")} />
        <Image style={iconStyleS} src={require("../img/tech-icons/css.png")} />
        <Image style={iconStyleS} src={require("../img/tech-icons/js.png")} />
        <Image
          style={iconStyleS}
          src={require("../img/tech-icons/react2.jpg")}
        />
        <Image style={iconStyleS} src={require("../img/tech-icons/sass.png")} />
        <Image
          style={iconStyleS}
          src={require("../img/tech-icons/reactBootstrap.png")}
        />
      </Segment>
      <Header className="primaryColor" textAlign="center">
        {" "}
        Back End Technologies
      </Header>
      <Segment style={iconContainerStyle}>
        <Image
          style={iconStyleL}
          src={require("../img/tech-icons/mongo.png")}
        />
        <Image
          style={iconStyleM}
          src={require("../img/tech-icons/mysql.png")}
        />
        <Image style={iconStyleM} src={require("../img/tech-icons/node.png")} />
        <Image
          style={iconStyleL}
          src={require("../img/tech-icons/express.png")}
        />
      </Segment>
      <Header className="primaryColor" textAlign="center">
        Development Tools
      </Header>
      <Segment style={iconContainerStyle}>
        <Image
          style={iconStyleL}
          src={require("../img/tech-icons/postman.png")}
        />
        <Image style={iconStyleL} src={require("../img/tech-icons/git.png")} />
        <Image
          style={iconStyleXL}
          src={require("../img/tech-icons/vscode.png")}
        />

        <Image style={iconStyleM} src={require("../img/tech-icons/npm.png")} />
      </Segment>
    </>
  );
};

export default TechIcons;
