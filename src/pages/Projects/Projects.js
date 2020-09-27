import React from "react";
import {
  Item,
  Image,
  Container,
  Divider,
  Icon,
  Segment,
  Button,
} from "semantic-ui-react";
import CardCarouselProject from "./CardCarouselProject/CardCarouselProject";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import CardCarousel from "../../components/CardCarouselFeatured/CardCarousel";

const localBizImages = [
  require("../../img/projects/LocalBiz/project_7_1.png"),
  require("../../img/projects/LocalBiz/project_7_2.png"),
  require("../../img/projects/LocalBiz/project_7_3.png"),
  require("../../img/projects/LocalBiz/project_7_4.png"),
  require("../../img/projects/LocalBiz/project_7_5.png"),
  require("../../img/projects/LocalBiz/project_7_6.png"),
  require("../../img/projects/LocalBiz/project_7_7.png"),
  require("../../img/projects/LocalBiz/project_7_8.png"),
  require("../../img/projects/LocalBiz/project_7_9.png"),
  require("../../img/projects/LocalBiz/project_7_10.png"),
];

const iconContainerStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  padding: "5px",
};

const buttonStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  padding: "5px",
};

const itemStyle = {
  margin: "20px 0px",
};

const iconStyleXS = {
  maxWidth: "20px",
  margin: ".5em",
};

const iconStyleS = {
  maxWidth: "40px",
  margin: ".5em",
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
            <CardCarouselProject images={localBizImages} />

            <Item.Content>
              <Item.Header as="a">LocalBiz</Item.Header>
              <Item.Meta>Small and Local Business Directory</Item.Meta>
              <Item.Description>
                <p>
                  This full-stack MERN application allows users post a business,
                  edit their business info, list items for sale, and send and
                  receive messages from other users.
                </p>
              </Item.Description>
              <Item.Extra>Technologies used:</Item.Extra>
              <Segment compact style={iconContainerStyle}>
                <Image
                  style={iconStyleXS}
                  src={require("../../img/tech-icons/html.png")}
                />
                <Image
                  style={iconStyleXS}
                  src={require("../../img/tech-icons/css.png")}
                />
                <Image
                  style={iconStyleXS}
                  src={require("../../img/tech-icons/js.png")}
                />
                <Image
                  style={iconStyleXS}
                  src={require("../../img/tech-icons/react2.jpg")}
                />
                <Image
                  style={iconStyleXS}
                  src={require("../../img/tech-icons/reactBootstrap.png")}
                />
                <Image
                  style={iconStyleS}
                  src={require("../../img/tech-icons/node.png")}
                />
                <Image
                  style={iconStyleS}
                  src={require("../../img/tech-icons/express.png")}
                />
                <Image
                  style={iconStyleS}
                  src={require("../../img/tech-icons/mongo.png")}
                />
              </Segment>
              <div style={buttonStyle}>
                <Button
                  primary
                  size="large"
                  content="View App"
                  icon="eye"
                  labelPosition="left"
                />
                <Button
                  secondary
                  size="large"
                  content="Github Repo"
                  icon="github"
                  labelPosition="left"
                />
              </div>
            </Item.Content>
          </Item>

          <Divider horizontal>
            <Icon name="star" color="yellow" />
          </Divider>
          {/* Project 2 VeggieKing */}
          <Item style={itemStyle}>
            <Item.Image
              size="large"
              src={require("../../img/projects/VeggieKing/project_1_2.png")}
            />

            <Item.Content>
              <Item.Header as="a">VeggieKing</Item.Header>
              <Item.Meta>Food Ordering and Delivery</Item.Meta>
              <Item.Description>
                <p>
                  This full-stack MERN application allows users post a business,
                  edit their business info, list items for sale, and send and
                  receive messages from other users.
                </p>
              </Item.Description>
              <Item.Extra>Technologies used:</Item.Extra>
              <Segment compact style={iconContainerStyle}>
                <Image
                  style={iconStyleXS}
                  src={require("../../img/tech-icons/html.png")}
                />
                <Image
                  style={iconStyleXS}
                  src={require("../../img/tech-icons/css.png")}
                />
                <Image
                  style={iconStyleXS}
                  src={require("../../img/tech-icons/js.png")}
                />
                <Image
                  style={iconStyleXS}
                  src={require("../../img/tech-icons/react2.jpg")}
                />
                <Image
                  style={iconStyleXS}
                  src={require("../../img/tech-icons/reactBootstrap.png")}
                />
                <Image
                  style={iconStyleS}
                  src={require("../../img/tech-icons/node.png")}
                />
                <Image
                  style={iconStyleS}
                  src={require("../../img/tech-icons/express.png")}
                />
                <Image
                  style={iconStyleS}
                  src={require("../../img/tech-icons/mongo.png")}
                />
              </Segment>
              <div style={buttonStyle}>
                <Button
                  primary
                  size="large"
                  content="View App"
                  icon="eye"
                  labelPosition="left"
                />
                <Button
                  secondary
                  size="large"
                  content="Github Repo"
                  icon="github"
                  labelPosition="left"
                />
              </div>
            </Item.Content>
          </Item>

          <Divider horizontal>
            <Icon name="star" color="yellow" />
          </Divider>
          {/* Project 3 RealEstate */}
          <Item style={itemStyle}>
            <Item.Image
              size="large"
              src={require("../../img/projects/RealEstate/project_6_2.png")}
            />

            <Item.Content>
              <Item.Header as="a">Hummell & Long Real Estate</Item.Header>
              <Item.Meta>Real Estate Listings</Item.Meta>
              <Item.Description>
                <p>
                  This full-stack MERN application allows users post a business,
                  edit their business info, list items for sale, and send and
                  receive messages from other users.
                </p>
              </Item.Description>
              <Item.Extra>Technologies used:</Item.Extra>
              <Segment compact style={iconContainerStyle}>
                <Image
                  style={iconStyleXS}
                  src={require("../../img/tech-icons/html.png")}
                />
                <Image
                  style={iconStyleXS}
                  src={require("../../img/tech-icons/css.png")}
                />
                <Image
                  style={iconStyleXS}
                  src={require("../../img/tech-icons/js.png")}
                />
                <Image
                  style={iconStyleXS}
                  src={require("../../img/tech-icons/react2.jpg")}
                />
                <Image
                  style={iconStyleXS}
                  src={require("../../img/tech-icons/reactBootstrap.png")}
                />
                <Image
                  style={iconStyleS}
                  src={require("../../img/tech-icons/node.png")}
                />
                <Image
                  style={iconStyleS}
                  src={require("../../img/tech-icons/express.png")}
                />
                <Image
                  style={iconStyleS}
                  src={require("../../img/tech-icons/mongo.png")}
                />
              </Segment>
              <div style={buttonStyle}>
                <Button
                  primary
                  size="large"
                  content="View App"
                  icon="eye"
                  labelPosition="left"
                />
                <Button
                  secondary
                  size="large"
                  content="Github Repo"
                  icon="github"
                  labelPosition="left"
                />
              </div>
            </Item.Content>
          </Item>

          <Divider horizontal>
            <Icon name="star" color="yellow" />
          </Divider>
          {/* Project 4 CamboCraft */}
          <Item style={itemStyle}>
            <Item.Image
              size="large"
              src={require("../../img/projects/CamboCraft/project_2_1.png")}
            />

            <Item.Content>
              <Item.Header as="a">CamboCraft</Item.Header>
              <Item.Meta>Custom Clothing Online Store</Item.Meta>
              <Item.Description>
                <p>
                  This full-stack MERN application allows users post a business,
                  edit their business info, list items for sale, and send and
                  receive messages from other users.
                </p>
              </Item.Description>
              <Item.Extra>Technologies used:</Item.Extra>
              <Segment compact style={iconContainerStyle}>
                <Image
                  style={iconStyleXS}
                  src={require("../../img/tech-icons/html.png")}
                />
                <Image
                  style={iconStyleXS}
                  src={require("../../img/tech-icons/css.png")}
                />
                <Image
                  style={iconStyleXS}
                  src={require("../../img/tech-icons/js.png")}
                />
                <Image
                  style={iconStyleXS}
                  src={require("../../img/tech-icons/react2.jpg")}
                />
                <Image
                  style={iconStyleXS}
                  src={require("../../img/tech-icons/reactBootstrap.png")}
                />
                <Image
                  style={iconStyleS}
                  src={require("../../img/tech-icons/node.png")}
                />
                <Image
                  style={iconStyleS}
                  src={require("../../img/tech-icons/express.png")}
                />
                <Image
                  style={iconStyleS}
                  src={require("../../img/tech-icons/mongo.png")}
                />
              </Segment>
              <div style={buttonStyle}>
                <Button
                  primary
                  size="large"
                  content="View App"
                  icon="eye"
                  labelPosition="left"
                />
                <Button
                  secondary
                  size="large"
                  content="Github Repo"
                  icon="github"
                  labelPosition="left"
                />
              </div>
            </Item.Content>
          </Item>

          <Divider horizontal>
            <Icon name="star" color="yellow" />
          </Divider>
          {/* Project 5 E-Commerce */}
          <Item style={itemStyle}>
            <Item.Image
              size="large"
              src={require("../../img/projects/Ecommerce/project_5_4.png")}
            />

            <Item.Content>
              <Item.Header as="a">E-Commerce Shop</Item.Header>
              <Item.Meta>Online Clothing Store</Item.Meta>
              <Item.Description>
                <p>
                  This full-stack MERN application allows users post a business,
                  edit their business info, list items for sale, and send and
                  receive messages from other users.
                </p>
              </Item.Description>
              <Item.Extra>Technologies used:</Item.Extra>
              <Segment compact style={iconContainerStyle}>
                <Image
                  style={iconStyleXS}
                  src={require("../../img/tech-icons/html.png")}
                />
                <Image
                  style={iconStyleXS}
                  src={require("../../img/tech-icons/css.png")}
                />
                <Image
                  style={iconStyleXS}
                  src={require("../../img/tech-icons/js.png")}
                />
                <Image
                  style={iconStyleXS}
                  src={require("../../img/tech-icons/react2.jpg")}
                />
                <Image
                  style={iconStyleXS}
                  src={require("../../img/tech-icons/reactBootstrap.png")}
                />
                <Image
                  style={iconStyleS}
                  src={require("../../img/tech-icons/node.png")}
                />
                <Image
                  style={iconStyleS}
                  src={require("../../img/tech-icons/express.png")}
                />
                <Image
                  style={iconStyleS}
                  src={require("../../img/tech-icons/mongo.png")}
                />
              </Segment>
              <div style={buttonStyle}>
                <Button
                  primary
                  size="large"
                  content="View App"
                  icon="eye"
                  labelPosition="left"
                />
                <Button
                  secondary
                  size="large"
                  content="Github Repo"
                  icon="github"
                  labelPosition="left"
                />
              </div>
            </Item.Content>
          </Item>

          <Divider horizontal>
            <Icon name="star" color="yellow" />
          </Divider>
          {/* Project 6 Spotify */}
          <Item style={itemStyle}>
            <Item.Image
              size="large"
              src={require("../../img/projects/Spotify/project_4_2.jpg")}
            />

            <Item.Content>
              <Item.Header as="a">Spotify</Item.Header>
              <Item.Meta>Music Player</Item.Meta>
              <Item.Description>
                <p>
                  This full-stack MERN application allows users post a business,
                  edit their business info, list items for sale, and send and
                  receive messages from other users.
                </p>
              </Item.Description>
              <Item.Extra>Technologies used:</Item.Extra>
              <Segment compact style={iconContainerStyle}>
                <Image
                  style={iconStyleXS}
                  src={require("../../img/tech-icons/html.png")}
                />
                <Image
                  style={iconStyleXS}
                  src={require("../../img/tech-icons/css.png")}
                />
                <Image
                  style={iconStyleXS}
                  src={require("../../img/tech-icons/js.png")}
                />
                <Image
                  style={iconStyleXS}
                  src={require("../../img/tech-icons/react2.jpg")}
                />
                <Image
                  style={iconStyleXS}
                  src={require("../../img/tech-icons/reactBootstrap.png")}
                />
                <Image
                  style={iconStyleS}
                  src={require("../../img/tech-icons/node.png")}
                />
                <Image
                  style={iconStyleS}
                  src={require("../../img/tech-icons/express.png")}
                />
                <Image
                  style={iconStyleS}
                  src={require("../../img/tech-icons/mongo.png")}
                />
              </Segment>
              <div style={buttonStyle}>
                <Button
                  primary
                  size="large"
                  content="View App"
                  icon="eye"
                  labelPosition="left"
                />
                <Button
                  secondary
                  size="large"
                  content="Github Repo"
                  icon="github"
                  labelPosition="left"
                />
              </div>
            </Item.Content>
          </Item>

          <Divider horizontal>
            <Icon name="star" color="yellow" />
          </Divider>

          {/* Project 7 AirBnB */}
          <Item style={itemStyle}>
            <Item.Image
              size="large"
              src={require("../../img/projects/AirBnB/project_3_2.jpg")}
            />

            <Item.Content>
              <Item.Header as="a">AirBnB</Item.Header>
              <Item.Meta>Property Rental</Item.Meta>
              <Item.Description>
                <p>
                  This full-stack MERN application allows users post a business,
                  edit their business info, list items for sale, and send and
                  receive messages from other users.
                </p>
              </Item.Description>
              <Item.Extra>Technologies used:</Item.Extra>
              <Segment compact style={iconContainerStyle}>
                <Image
                  style={iconStyleXS}
                  src={require("../../img/tech-icons/html.png")}
                />
                <Image
                  style={iconStyleXS}
                  src={require("../../img/tech-icons/css.png")}
                />
                <Image
                  style={iconStyleXS}
                  src={require("../../img/tech-icons/js.png")}
                />
                <Image
                  style={iconStyleXS}
                  src={require("../../img/tech-icons/react2.jpg")}
                />
                <Image
                  style={iconStyleXS}
                  src={require("../../img/tech-icons/reactBootstrap.png")}
                />
                <Image
                  style={iconStyleS}
                  src={require("../../img/tech-icons/node.png")}
                />
                <Image
                  style={iconStyleS}
                  src={require("../../img/tech-icons/express.png")}
                />
                <Image
                  style={iconStyleS}
                  src={require("../../img/tech-icons/mongo.png")}
                />
              </Segment>
              <div style={buttonStyle}>
                <Button
                  primary
                  size="large"
                  content="View App"
                  icon="eye"
                  labelPosition="left"
                />
                <Button
                  secondary
                  size="large"
                  content="Github Repo"
                  icon="github"
                  labelPosition="left"
                />
              </div>
            </Item.Content>
          </Item>
        </Item.Group>
      </Container>
      <Footer />
    </div>
  );
};

export default Projects;
