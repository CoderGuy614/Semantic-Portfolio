import React from "react";
import { Container, Header, Image } from "semantic-ui-react";

const PageHeader = ({ img, mainText, subText }) => {
  const headerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  };

  return (
    <Container
      fluid
      style={{ marginTop: "50px", height: "200px", background: "lightblue" }}
    >
      <div style={headerStyle}>
        <Header className="primaryColor" as="h1">
          <Image circular style={{ width: "150px" }} src={img} />{" "}
          <Header.Content>
            {mainText}
            <Header.Subheader className="secondaryColor">
              {subText}
            </Header.Subheader>
          </Header.Content>
        </Header>
      </div>
    </Container>
  );
};

export default PageHeader;
