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

const veggieKingImages = [
  require("../../img/projects/VeggieKing/project_1_2.png"),
  require("../../img/projects/VeggieKing/project_1_3.png"),
  require("../../img/projects/VeggieKing/project_1_4.png"),
  require("../../img/projects/VeggieKing/project_1_5.png"),
  require("../../img/projects/VeggieKing/project_1_6.png"),
  require("../../img/projects/VeggieKing/project_1_7.png"),
];

const realEstateImages = [
  require("../../img/projects/RealEstate/project_6_1.png"),
  require("../../img/projects/RealEstate/project_6_2.png"),
  require("../../img/projects/RealEstate/project_6_3.png"),
  require("../../img/projects/RealEstate/project_6_4.png"),
  require("../../img/projects/RealEstate/project_6_5.png"),
  require("../../img/projects/RealEstate/project_6_6.png"),
  require("../../img/projects/RealEstate/project_6_7.png"),
];

const camboCraftImages = [
  require("../../img/projects/CamboCraft/project_2_1.png"),
  require("../../img/projects/CamboCraft/project_2_2.png"),
  require("../../img/projects/CamboCraft/project_2_3.png"),
  require("../../img/projects/CamboCraft/project_2_4.png"),
  require("../../img/projects/CamboCraft/project_2_5.png"),
  require("../../img/projects/CamboCraft/project_2_6.png"),
];

const eCommerceImages = [
  require("../../img/projects/Ecommerce/project_5_1.png"),
  require("../../img/projects/Ecommerce/project_5_2.png"),
  require("../../img/projects/Ecommerce/project_5_3.png"),
  require("../../img/projects/Ecommerce/project_5_4.png"),
  require("../../img/projects/Ecommerce/project_5_5.png"),
  require("../../img/projects/Ecommerce/project_5_6.png"),
];

const spotifyImages = [
  require("../../img/projects/Spotify/project_4_1.jpg"),
  require("../../img/projects/Spotify/project_4_2.jpg"),
  require("../../img/projects/Spotify/project_4_3.jpg"),
  require("../../img/projects/Spotify/project_4_4.jpg"),
  require("../../img/projects/Spotify/project_4_5.jpg"),
];

const airBnbImages = [
  require("../../img/projects/AirBnB/project_3_1.jpg"),
  require("../../img/projects/AirBnB/project_3_2.jpg"),
  require("../../img/projects/AirBnB/project_3_3.jpg"),
  require("../../img/projects/AirBnB/project_3_4.jpg"),
];

const containerStyle = {
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
  maxWidth: "50px",
  margin: ".5em",
};

const iconStyleM = {
  maxWidth: "70px",
  margin: ".5em",
};

const Projects = () => {
  return (
    <div>
      <PageHeader
        img="https://res.cloudinary.com/deduwxk82/image/upload/v1600942834/profile-pic_oubsah.jpg"
        mainText="Projects"
        subText="Check out Some of My Work"
        buttonText="Contact Me"
        buttonUrl="/contact"
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
              <Segment compact style={containerStyle}>
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
                  style={iconStyleXS}
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
              <div style={containerStyle}>
                <Button.Group>
                  <Button
                    primary
                    size="large"
                    content="View App"
                    icon="eye"
                    labelPosition="left"
                  />
                  <Button.Or />
                  <Button
                    secondary
                    size="large"
                    content="Github Repo"
                    icon="github"
                    labelPosition="right"
                  />
                </Button.Group>
              </div>
            </Item.Content>
          </Item>

          <Divider horizontal>
            <Icon name="star" color="yellow" />
          </Divider>
          {/* Project 2 VeggieKing */}
          <Item style={itemStyle}>
            <CardCarouselProject images={veggieKingImages} />

            <Item.Content>
              <Item.Header as="a">VeggieKing</Item.Header>
              <Item.Meta>Food Ordering and Delivery</Item.Meta>
              <Item.Description>
                <p>
                  I was inspired to create this app by a local produce vendor in
                  my current town of Siem Reap, Camobodia. This hard-working
                  local business often had difficulty communicating with
                  customers about their products, price and delivery. This MERN
                  stack application was created to help them improve their
                  operations. It has a React / Material UI responsive front-end,
                  JsonWebToken for user authentication, Nodemailer for email
                  confirmations, and a custom built-in chat feature. Shop admins
                  can view their open orders, easily modify their product list,
                  chat with customers, and view all of their customer profile
                  data at a glance.
                </p>
              </Item.Description>
              <Item.Extra>Technologies used:</Item.Extra>
              <Segment compact style={containerStyle}>
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
                  src={require("../../img/tech-icons/material.png")}
                />
                <Image
                  style={iconStyleXS}
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
              <div style={containerStyle}>
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
            <CardCarouselProject images={realEstateImages} />
            <Item.Content>
              <Item.Header as="a">Hummell & Long Real Estate</Item.Header>
              <Item.Meta>Real Estate Listings</Item.Meta>
              <Item.Description>
                <p>
                  This responsive real estate app uses a Strapi Headless CMS
                  back-end, and React-Bootstrap on the front end. Images are
                  hosted by Cloudinary. The app uses Redux to allow users to add
                  and remove favorites from multiple components, and
                  Redux-Persist for data peristence with local storage. Google
                  Maps is integrated to show each home's location, and users can
                  filters the homes based on multiple criteria simulataneously.
                </p>
              </Item.Description>
              <Item.Extra>Technologies used:</Item.Extra>
              <Segment compact style={containerStyle}>
                <Image
                  style={iconStyleM}
                  src={require("../../img/tech-icons/strapi.png")}
                />
                <Image
                  style={iconStyleS}
                  src={require("../../img/tech-icons/react2.jpg")}
                />
                <Image
                  style={iconStyleS}
                  src={require("../../img/tech-icons/redux.png")}
                />

                <Image
                  style={iconStyleS}
                  src={require("../../img/tech-icons/cloudinary.png")}
                />
              </Segment>
              <div style={containerStyle}>
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
            <CardCarouselProject images={camboCraftImages} />

            <Item.Content>
              <Item.Header as="a">CamboCraft</Item.Header>
              <Item.Meta>Custom Clothing Online Store</Item.Meta>
              <Item.Description>
                <p>
                  This goal of this project was to provide a means for a local
                  Cambodian artist to display and sell her handmade clothing to
                  potential customers. The front end was built with ReactJS and
                  the Materialize CSS library to add some cool features like
                  toasts and modals. My favorite feature is the use of clickable
                  SVG icons that filter the products by type and change color
                  when clicked.
                </p>
              </Item.Description>
              <Item.Extra>Technologies used:</Item.Extra>
              <Segment compact style={containerStyle}>
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
                  src={require("../../img/tech-icons/materialize.png")}
                />
                <Image
                  style={iconStyleXS}
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
              <div style={containerStyle}>
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
            <CardCarouselProject images={eCommerceImages} />

            <Item.Content>
              <Item.Header as="a">E-Commerce Shop</Item.Header>
              <Item.Meta>Online Clothing Store</Item.Meta>
              <Item.Description>
                <p>
                  This E-Commerce Site uses React and Redux to manage state and
                  Redux-Persist to store cart items in local storage. User
                  authentication is provided by Google Firebase and includes a
                  "Sign In with Google" feature. The credit card payments are
                  handed through a Stripe integration.
                </p>
              </Item.Description>
              <Item.Extra>Technologies used:</Item.Extra>
              <Segment compact style={containerStyle}>
                <Image
                  style={iconStyleXS}
                  src={require("../../img/tech-icons/react2.jpg")}
                />
                <Image
                  style={iconStyleS}
                  src={require("../../img/tech-icons/redux.png")}
                />
                <Image
                  style={iconStyleS}
                  src={require("../../img/tech-icons/firebase.png")}
                />
                <Image
                  style={iconStyleS}
                  src={require("../../img/tech-icons/stripe.png")}
                />
                <Image
                  style={iconStyleS}
                  src={require("../../img/tech-icons/sass.png")}
                />
              </Segment>
              <div style={containerStyle}>
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
            <CardCarouselProject images={spotifyImages} />

            <Item.Content>
              <Item.Header as="a">Spotify</Item.Header>
              <Item.Meta>Music Player</Item.Meta>
              <Item.Description>
                <p>
                  This fully functional music player uses SQL to associate the
                  song, album, artist and genre information. It also uses Stripe
                  to charge a user's credit card for the premium service.
                </p>
              </Item.Description>
              <Item.Extra>Technologies used:</Item.Extra>
              <Segment compact style={containerStyle}>
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
                  src={require("../../img/tech-icons/react2.jpg")}
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
                  src={require("../../img/tech-icons/mysql.png")}
                />
              </Segment>
              <div style={containerStyle}>
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
            <CardCarouselProject images={airBnbImages} />

            <Item.Content>
              <Item.Header as="a">AirBnB</Item.Header>
              <Item.Meta>Property Rental</Item.Meta>
              <Item.Description>
                <p>
                  In this project, I decided to re-create one of my favorite web
                  apps - AirBnb. It includes the Google Maps API to show the
                  locations of the homes as pins on a map. This is a full MERN
                  stack application that uses no front end frameworks, just CSS.
                </p>
              </Item.Description>
              <Item.Extra>Technologies used:</Item.Extra>
              <Segment compact style={containerStyle}>
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
                  style={iconStyleS}
                  src={require("../../img/tech-icons/node.png")}
                />
                <Image
                  style={iconStyleS}
                  src={require("../../img/tech-icons/express.png")}
                />
                <Image
                  style={iconStyleS}
                  src={require("../../img/tech-icons/mysql.png")}
                />
              </Segment>
              <div style={containerStyle}>
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
