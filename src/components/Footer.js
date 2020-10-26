import React from "react";
import { Container, Header, Segment, Grid, List } from "semantic-ui-react";
import ContactForm from "./ContactForm";

const Footer = () => {
  return (
    <Segment inverted vertical style={{ padding: "3em 0em" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Quick Links" />
              <List link inverted>
                <List.Item as="a" href="/">
                  Home
                </List.Item>
                <List.Item as="a" href="/projects">
                  Projects
                </List.Item>
                <List.Item as="a" href="/about">
                  About
                </List.Item>
                <List.Item as="a" href="/contact">
                  Contact
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Projects" />
              <List link inverted>
                <List.Item
                  as="a"
                  href="https://localbiz-siem-reap.herokuapp.com/"
                >
                  LocalBiz
                </List.Item>
                <List.Item as="a" href="https://veggieking.herokuapp.com/">
                  VeggieKing
                </List.Item>
                <List.Item
                  as="a"
                  href="https://real-estate-9d554.web.app/"
                >
                  Real Estate
                </List.Item>
                <List.Item
                  as="a"
                  href="https://coderguy614.github.io/CamboCraft/"
                >
                  CamboCraft Clothing
                </List.Item>
                <List.Item
                  as="a"
                  href="https://jtl-clothing-shop.herokuapp.com/"
                >
                  E-Commerce Store
                </List.Item>
                <List.Item
                  as="a"
                  href="https://spotify-client-jlutz.herokuapp.com/"
                >
                  Spotify Music
                </List.Item>
                <List.Item
                  as="a"
                  href="https://airbnb-client-jonnylutz.herokuapp.com/"
                >
                  AirBnB Clone
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as="h4" inverted>
                Send a Quick Message:
              </Header>
              <ContactForm />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};

export default Footer;
