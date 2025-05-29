import React from "react";
import {
  Item,
  Image,
  Container,
  Divider,
  Icon,
  Segment,
  Header,
  List,
} from "semantic-ui-react";
import CardCarouselProject from "../../components/CardCarouselProject/CardCarouselProject";
import PageHeader from "../../components/PageHeader";
import DoubleButton from "./DoubleButton";
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
  require("../../img/projects/VeggieKing/project_1_1.png"),
  require("../../img/projects/VeggieKing/project_1_2.png"),
  require("../../img/projects/VeggieKing/project_1_3.png"),
  require("../../img/projects/VeggieKing/project_1_4.png"),
  require("../../img/projects/VeggieKing/project_1_5.png"),
  require("../../img/projects/VeggieKing/project_1_6.png"),
  require("../../img/projects/VeggieKing/project_1_7.png"),
  require("../../img/projects/VeggieKing/project_1_8.png"),
  require("../../img/projects/VeggieKing/project_1_9.png"),
  require("../../img/projects/VeggieKing/project_1_10.png"),
  require("../../img/projects/VeggieKing/project_1_11.png"),
  require("../../img/projects/VeggieKing/project_1_12.png"),
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
  require("../../img/projects/CamboCraft/project_2_7.png"),
  require("../../img/projects/CamboCraft/project_2_8.png"),
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
  require("../../img/projects/Spotify/project_4_1.png"),
  require("../../img/projects/Spotify/project_4_2.png"),
  require("../../img/projects/Spotify/project_4_3.png"),
  require("../../img/projects/Spotify/project_4_4.png"),
  require("../../img/projects/Spotify/project_4_5.png"),
];

const airBnbImages = [
  require("../../img/projects/AirBnB/project_3_1.png"),
  require("../../img/projects/AirBnB/project_3_2.png"),
  require("../../img/projects/AirBnB/project_3_3.png"),
  require("../../img/projects/AirBnB/project_3_4.png"),
  require("../../img/projects/AirBnB/project_3_4.png"),
];

const containerStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  padding: "5px",
};

const flexCenter = {
  display: "flex",
  justifyContent: "center",
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
        img={require("../../img/personal/profile-pic.png")}
        mainText="Projects"
        subText="Check out Some of My Work"
      />
      <Container style={{ position: "relative" }}>
        <Item.Group style={{ position: "relative" }}>
          {/* Project 1 LocalBiz */}
          <Item style={itemStyle}>
            <CardCarouselProject images={localBizImages} />

            <Item.Content>
              <Item.Header as="a" className="mobile-stacked">
                LocalBiz
              </Item.Header>
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
              <Header
                as="h3"
                content="Favorite Features:"
                className="hide-on-tablet"
              />
              <List bulleted className="hide-on-tablet">
                <List.Item>
                  <List.Header>User authentication</List.Header>
                  Users can register and login with Email.  Certain API operations are auth protected.
                </List.Item>
                <List.Item>
                  <List.Header>Message Center</List.Header>
                  Users can chat about items for sale using the custom message
                  center
                </List.Item>
                <List.Item>
                  <List.Header>Location Picker</List.Header>A business owner can
                  set their map location with the custom picker tool, powered by Google Maps API.
                </List.Item>
                <List.Item>
                  <List.Header>Form Validation</List.Header>All forms use React
                  + Formik to provide custom validation and feedback to the user
                </List.Item>
              </List>
              <div style={flexCenter}>
                <DoubleButton
                  appUrl="https://master.d28l3w9jtysc89.amplifyapp.com"
                  githubUrl="https://github.com/CoderGuy614/LocalBiz"
                />
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
              <Item.Header as="a" className="mobile-stacked">
                VeggieKing
              </Item.Header>
              <Item.Meta>Food Ordering and Delivery</Item.Meta>
              <Item.Description>
                <p>
                  I was inspired to create this app by a local produce vendor in the 
                  town of Siem Reap, Cambodia. This hard-working
                  local business often had difficulty communicating with
                  customers about their products, price and delivery. This MERN
                  stack application was created to help them improve their
                  operations. Shop admins can view their open orders, easily
                  modify their product list, chat with customers, and view all
                  of their customer profile data at a glance.
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
              <Header
                as="h3"
                content="Favorite Features:"
                className="hide-on-tablet"
              />
              <List bulleted className="hide-on-tablet">
                <List.Item>
                  <List.Header>User authentication</List.Header>
                  JSON Web Token (JWT) user authentication system
                </List.Item>
                <List.Item>
                  <List.Header>Message Center</List.Header>
                  Buyers and sellers can chat and users are notified of unread
                  messages
                </List.Item>
                <List.Item>
                  <List.Header>MaterialUI Components</List.Header>The front-end
                  was built with MaterialUI, including the custom editable table
                  component
                </List.Item>
                <List.Item>
                  <List.Header>Email Order Confirmation</List.Header>The
                  NodeMailer package was used to send email confirmations to
                  users
                </List.Item>
              </List>
              <div style={flexCenter}>
                <DoubleButton
                  appUrl="https://veggieking.herokuapp.com/"
                  githubUrl="https://github.com/CoderGuy614/VeggieKing"
                  disablePrimaryButton={true}
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
              <Item.Header as="a" className="mobile-stacked">
                Hummell & Long Real Estate
              </Item.Header>
              <Item.Meta>Real Estate Listings</Item.Meta>
              <Item.Description>
                <p>
                  This responsive real estate listing app uses a Strapi Headless
                  CMS back-end, and React-Bootstrap on the front end. Users can
                  browse property listings by map location or filter listings by
                  multiple criteria.
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
                  src={require("../../img/tech-icons/redux2.png")}
                />

                <Image
                  style={iconStyleS}
                  src={require("../../img/tech-icons/cloudinary.png")}
                />
              </Segment>
              <Header
                as="h3"
                content="Favorite Features:"
                className="hide-on-tablet"
              />
              <List bulleted className="hide-on-tablet">
                <List.Item>
                  <List.Header>Redux + LocalStorage</List.Header>
                  React + Redux is used to manage the global "Favorited" homes
                  state, as well as alert messages. Browser local storage is
                  used so that users don't need to login to add a home to their
                  favorites
                </List.Item>
                <List.Item>
                  <List.Header>Strapi + Cloudinary Back-End</List.Header>
                  API endpoints were generated using the Strapi headless CMS and
                  the home images are hosted by Cloudinary. This was done in
                  order to permit non-programmers to add / modify homes to the
                  database easily using the Strapi UI
                </List.Item>

                <List.Item>
                  <List.Header>Custom Filters</List.Header>Users can filter
                  listings by multiple criteria at the same time, such as
                  bedrooms, home type and max price
                </List.Item>
              </List>
              <div style={flexCenter}>
                <DoubleButton
                  appUrl="https://real-estate-9d554.web.app/"
                  githubUrl="https://github.com/CoderGuy614/real-estate-client"
                  disablePrimaryButton={true}
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
              <Item.Header as="a" className="mobile-stacked">
                CamboCraft
              </Item.Header>
              <Item.Meta>Custom Clothing Online Store</Item.Meta>
              <Item.Description>
                <p>
                  This goal of this project was to provide a means for a local
                  Cambodian artist to display and sell her handmade clothing to
                  potential customers.
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
              <Header
                as="h3"
                content="Favorite Features:"
                className="hide-on-tablet"
              />
              <List bulleted className="hide-on-tablet">
                <List.Item>
                  <List.Header>React + Materialize CSS Front End</List.Header>
                  The Materialize CSS libarary was used to add some cool
                  features like toasts and modals, as well as for responsiveness
                </List.Item>
                <List.Item>
                  <List.Header>Custom SVG Filter Images</List.Header>
                  Custom color changing SVG images were used for the product
                  type filters. Multiple types can selected at once
                </List.Item>

                <List.Item>
                  <List.Header>Email Order Confirmation</List.Header>NodeMailer
                  was used to send custom email order confirmations to both the
                  customer as well as the vendor
                </List.Item>
              </List>
              <div style={flexCenter}>
                <DoubleButton
                  appUrl="https://coderguy614.github.io/CamboCraft/"
                  githubUrl="https://github.com/CoderGuy614/CamboCraft"
                  disablePrimaryButton={true}
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
              <Item.Header as="a" className="mobile-stacked">
                E-Commerce Shop
              </Item.Header>
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
                  style={iconStyleS}
                  src={require("../../img/tech-icons/react2.jpg")}
                />
                <Image
                  style={iconStyleS}
                  src={require("../../img/tech-icons/redux2.png")}
                />
                <Image
                  style={iconStyleM}
                  src={require("../../img/tech-icons/firebase2.png")}
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
              <Header
                as="h3"
                content="Favorite Features:"
                className="hide-on-tablet"
              />
              <List bulleted className="hide-on-tablet">
                <List.Item>
                  <List.Header>React + SASS Front End</List.Header>
                  Styling was done using a custom SCSS file associated with each
                  React component
                </List.Item>
                <List.Item>
                  <List.Header>Google Firebase Integration</List.Header>
                  User authentication is performed using Google Firebase and
                  allows users to sign in with Google
                </List.Item>

                <List.Item>
                  <List.Header>Redux Global State Management</List.Header> The
                  cart items are stored in global state using React + Redux
                </List.Item>
                <List.Item>
                  <List.Header>Stripe Payment Processing</List.Header> A Stripe
                  account and payment form is connected to the app for handling
                  payments
                </List.Item>
              </List>
              <div style={flexCenter}>
                <DoubleButton
                  appUrl="https://jtl-clothing-shop.herokuapp.com/"
                  githubUrl="https://github.com/CoderGuy614/React-Clothing-Shop"
                  disablePrimaryButton={true}
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
              <Item.Header as="a" className="mobile-stacked">
                Spotify
              </Item.Header>
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
              <Header
                as="h3"
                content="Favorite Features:"
                className="hide-on-tablet"
              />
              <List bulleted className="hide-on-tablet">
                <List.Item>
                  <List.Header>Howl Audio Player Package</List.Header>
                  The Howl Package allows the song files to be played through
                  the app
                </List.Item>
                <List.Item>
                  <List.Header>SQL Database</List.Header>
                  Songs are associated with one another by Artist, Album and
                  Genre using an SQL database
                </List.Item>
                <List.Item>
                  <List.Header>Stripe Payment Processing</List.Header> A Stripe
                  account and payment form is connected to the app for handling
                  payments
                </List.Item>

                <List.Item>
                  <List.Header>No Frameworks!</List.Header> The responsive UI is
                  built with only HTML5 and CSS3
                </List.Item>
              </List>
              <div style={flexCenter}>
                <DoubleButton
                  appUrl="https://spotify-client-jlutz.herokuapp.com/"
                  githubUrl="https://github.com/CoderGuy614/07-Spotify-Client"
                  disablePrimaryButton={true}
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
              <Item.Header as="a" className="mobile-stacked">
                AirBnB
              </Item.Header>
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

              <Header
                as="h3"
                content="Favorite Features:"
                className="hide-on-tablet"
              />
              <List bulleted className="hide-on-tablet">
                <List.Item>
                  <List.Header>SQL Database</List.Header>
                  Homes are associated with a host user and a set of reviews
                  using an SQL database
                </List.Item>
                <List.Item>
                  <List.Header>Google Maps Integration</List.Header> The home
                  location is shown on a custom Google map and the corresponding
                  pin is highlighted on hover
                </List.Item>
                <List.Item>
                  <List.Header>No Frameworks!</List.Header> The responsive UI is
                  built with only HTML5 and CSS3
                </List.Item>
              </List>
              <div style={flexCenter}>
                <DoubleButton
                  appUrl="https://airbnb-client-jonnylutz.herokuapp.com/"
                  githubUrl="https://github.com/CoderGuy614/04-airbnb-client"
                  disablePrimaryButton={true}
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
