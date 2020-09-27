import React from "react";
import { Item, Image, Container, Divider, Icon } from "semantic-ui-react";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";

const itemStyle = {
  margin: "20px 0px",
};

const Projects = () => {
  return (
    <div>
      <PageHeader
        img="https://res.cloudinary.com/deduwxk82/image/upload/v1600942834/profile-pic_oubsah.jpg"
        mainText="Projects"
        subText="Check Out Some of My Recent Work"
      />
      <Container style={{ position: "relative" }}>
        <Item.Group style={{ position: "relative" }}>
          {/* Project 1 LocalBiz */}
          <Item style={itemStyle}>
            <Item.Image
              size="large"
              src={require("../img/projects/LocalBiz/project_7_1.png")}
            />

            <Item.Content>
              <Item.Header as="a">LocalBiz</Item.Header>
              <Item.Meta>Small and Local Business Directory</Item.Meta>
              <Item.Description>
                <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
              </Item.Description>
              <Item.Extra>Additional Details</Item.Extra>
            </Item.Content>
          </Item>

          <Divider horizontal>
            <Icon name="star" color="yellow" />
          </Divider>
          {/* Project 2 VeggieKing */}
          <Item style={itemStyle}>
            <Item.Image
              size="large"
              src={require("../img/projects/VeggieKing/project_1_2.png")}
            />

            <Item.Content>
              <Item.Header as="a">VeggieKing</Item.Header>
              <Item.Meta>Food Ordering and Delivery</Item.Meta>
              <Item.Description>
                <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
              </Item.Description>
              <Item.Extra>Additional Details</Item.Extra>
            </Item.Content>
          </Item>
          <Divider horizontal>
            <Icon name="star" color="yellow" />
          </Divider>
          {/* Project 3 RealEstate */}
          <Item style={itemStyle}>
            <Item.Image
              size="large"
              src={require("../img/projects/RealEstate/project_6_2.png")}
            />

            <Item.Content>
              <Item.Header as="a">Hummell & Long Real Estate</Item.Header>
              <Item.Meta>Real Estate Listings</Item.Meta>
              <Item.Description>
                <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
              </Item.Description>
              <Item.Extra>Additional Details</Item.Extra>
            </Item.Content>
          </Item>

          <Divider horizontal>
            <Icon name="star" color="yellow" />
          </Divider>
          {/* Project 4 CamboCraft */}
          <Item style={itemStyle}>
            <Item.Image
              size="large"
              src={require("../img/projects/CamboCraft/project_2_1.png")}
            />

            <Item.Content>
              <Item.Header as="a">CamboCraft</Item.Header>
              <Item.Meta>Custom Clothing Online Store</Item.Meta>
              <Item.Description>
                <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
              </Item.Description>
              <Item.Extra>Additional Details</Item.Extra>
            </Item.Content>
          </Item>

          <Divider horizontal>
            <Icon name="star" color="yellow" />
          </Divider>
          {/* Project 5 E-Commerce */}
          <Item style={itemStyle}>
            <Item.Image
              size="large"
              src={require("../img/projects/Ecommerce/project_5_4.png")}
            />

            <Item.Content>
              <Item.Header as="a">E-Commerce Shop</Item.Header>
              <Item.Meta>Online Clothing Store</Item.Meta>
              <Item.Description>
                <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
              </Item.Description>
              <Item.Extra>Additional Details</Item.Extra>
            </Item.Content>
          </Item>

          <Divider horizontal>
            <Icon name="star" color="yellow" />
          </Divider>
        </Item.Group>
      </Container>
      <Footer />
    </div>
  );
};

export default Projects;
