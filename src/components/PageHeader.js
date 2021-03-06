import React from "react";
import {
  Container,
  Header,
  Image,
  Button,
  Visibility,
} from "semantic-ui-react";

const PageHeader = ({ img, mainText, subText, buttonText, buttonUrl }) => {
  const headerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  };

  return (
    <Container
      fluid
      textAlign="center"
      style={{ marginTop: "50px", height: "200px" }}
      className="primaryColor"
    >
      <div style={headerStyle}>
        <Header className="pageBackground" as="h1">
          <Image circular style={{ width: "150px" }} src={img} />{" "}
          <Header.Content>
            {mainText}
            <Header.Subheader className="secondaryColor hide-on-mobile">
              {subText}
            </Header.Subheader>
            {buttonText && (
              <Button
                secondary
                style={{ marginTop: "1.5em", color: "white" }}
                size="large"
                icon="arrow right"
                content="See My Work"
                labelPosition="right"
                href={buttonUrl}
                className="hide-on-mobile"
              />
            )}
          </Header.Content>
        </Header>
      </div>
    </Container>
  );
};

export default PageHeader;
