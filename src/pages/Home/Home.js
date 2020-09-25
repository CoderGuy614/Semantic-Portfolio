/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */

import React from "react";
import Footer from "../../components/Footer";

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Segment,
  Icon,
} from "semantic-ui-react";

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

const Home = () => {
  return (
    <div>
      <Container fluid style={{ marginTop: "6em", background: "lightblue" }}>
        <Grid>
          <Grid.Column width={16} textAlign="center">
            <Header className="primaryColor" as="h1">
              <Image
                circular
                style={{ width: "150px" }}
                src="https://res.cloudinary.com/deduwxk82/image/upload/v1600942834/profile-pic_oubsah.jpg"
              />{" "}
              <Header.Content>
                Jonny Lutz
                <Header.Subheader className="secondaryColor">
                  Full Stack Web Developer
                </Header.Subheader>
              </Header.Content>
            </Header>
          </Grid.Column>
        </Grid>
      </Container>

      <Segment style={{ padding: "8em 0em" }} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                Not your average web developer...
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                We can give your company superpowers to do things that they
                never thought possible. Let us delight your customers and
                empower your needs... through pure data analytics.
              </p>
              <Header as="h3" style={{ fontSize: "2em" }}>
                We Make Bananas That Can Dance
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                Yes that's right, you thought it was the stuff of dreams, but
                even bananas can be bioengineered.
              </p>
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
              <Header textAlign="center"> Front End Technologies</Header>
              <Segment style={iconContainerStyle}>
                <Image style={iconStyle} src={require("../../img/html.png")} />
                <Image style={iconStyle} src={require("../../img/css.png")} />
                <Image style={iconStyle} src={require("../../img/js.png")} />
                <Image
                  style={iconStyle}
                  src={require("../../img/react2.jpg")}
                />
                <Image style={iconStyle} src={require("../../img/sass.png")} />
                <Image
                  style={iconStyle}
                  src={require("../../img/reactBootstrap.png")}
                />
              </Segment>
              <Header textAlign="center"> Back End Technologies</Header>
              <Segment style={iconContainerStyle}>
                <Image
                  style={iconStyleBack}
                  src={require("../../img/mongo.png")}
                />
                <Image
                  style={iconStyleBack}
                  src={require("../../img/mysql.png")}
                />
                <Image
                  style={iconStyleBack}
                  src={require("../../img/node.png")}
                />
                <Image
                  style={iconStyleDev}
                  src={require("../../img/express.png")}
                />
              </Segment>
              <Header textAlign="center">Development Tools</Header>
              <Segment style={iconContainerStyle}>
                <Image
                  style={iconStyleDev}
                  src={require("../../img/postman.png")}
                />
                <Image
                  style={iconStyleDev}
                  src={require("../../img/git.png")}
                />

                <Image
                  style={iconStyle}
                  src={require("../../img/terminal.png")}
                />
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Button size="huge">Check Them Out</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment style={{ padding: "0em" }} vertical>
        <Grid celled="internally" columns="equal" stackable>
          <Grid.Row textAlign="center">
            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                "What a Company"
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                That is what they all say about us
              </p>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                "I shouldn't have gone with their competitor."
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                <Image avatar src="/images/avatar/large/nan.jpg" />
                <b>Nan</b> Chief Fun Officer Acme Toys
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment style={{ padding: "8em 0em" }} vertical>
        <Container text>
          <Header as="h3" style={{ fontSize: "2em" }}>
            Breaking The Grid, Grabs Your Attention
          </Header>
          <p style={{ fontSize: "1.33em" }}>
            Instead of focusing on content creation and hard work, we have
            learned how to master the art of doing nothing by providing massive
            amounts of whitespace and generic content that can seem massive,
            monolithic and worth your attention.
          </p>
          <Button as="a" size="large">
            Read More
          </Button>

          <Divider
            as="h4"
            className="header"
            horizontal
            style={{ margin: "3em 0em", textTransform: "uppercase" }}
          >
            <a href="#">Case Studies</a>
          </Divider>

          <Header as="h3" style={{ fontSize: "2em" }}>
            Did We Tell You About Our Bananas?
          </Header>
          <p style={{ fontSize: "1.33em" }}>
            Yes I know you probably disregarded the earlier boasts as
            non-sequitur filler content, but it's really true. It took years of
            gene splicing and combinatory DNA research, but our bananas can
            really dance.
          </p>
          <Button as="a" size="large">
            I'm Still Quite Interested
          </Button>
        </Container>
      </Segment>
      <Footer />
    </div>
  );
};

export default Home;
