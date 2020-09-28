/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */
import { loadRepos, loadUser } from "../../apiCore";
import Moment from "react-moment";
import React, { useState, useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import CardCarousel from "../../components/CardCarouselFeatured/CardCarousel";
import TechIcons from "../../components/TechIcons";

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Item,
  Segment,
  Icon,
} from "semantic-ui-react";

const carouselContainerStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
};

const Home = () => {
  const [repos, setRepos] = useState([]);
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    loadRepos()
      .then((reps) => setRepos(reps))
      .catch((err) => setError(err));
    loadUser()
      .then((usr) => setUser(usr))
      .catch((err) => setError(err));
  }, []);

  return (
    <div>
      <PageHeader
        img="https://res.cloudinary.com/deduwxk82/image/upload/v1600942834/profile-pic_oubsah.jpg"
        mainText="Jonny Lutz"
        subText={"Full Stack Web Developer"}
        buttonText="See My Work"
        buttonUrl="/projects"
      />

      <Segment style={{ padding: "4em 0em" }} vertical>
        <Grid container stackable>
          <Grid.Column width={10}>
            <Header className="primaryColor" textAlign="center">
              Featured Project - LocalBiz
            </Header>
            <Grid.Row style={carouselContainerStyle}>
              <CardCarousel />
            </Grid.Row>
            <Grid.Row>
              <Header as="h3" style={{ fontSize: "2em", marginTop: "2em" }}>
                Not your average web developer...
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                We can give your company superpowers to do things that they
                never thought possible. Let us delight your customers and
                empower your needs... through pure data analytics.
              </p>
            </Grid.Row>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <TechIcons />
          </Grid.Column>
        </Grid>
      </Segment>

      <Container style={{ padding: "2em 0em" }}>
        <Grid celled="internally" stackable>
          <Grid.Row>
            <Grid.Column width={10}>
              <Header as="h1" className="primaryColor">
                <Icon name="github square" size="large" />
                GitHub Profile & Repos
              </Header>
              <Item.Group>
                <Item>
                  <Item.Image circular size="small" src={user.avatar_url} />
                  <Item.Content verticalAlign="middle">
                    <Item.Header>{user.login}</Item.Header>
                    <Item.Meta>Location: {user.location}</Item.Meta>
                    <Item.Description>Bio: {user.bio}</Item.Description>
                    <Item.Extra>
                      <Button
                        href="https://github.com/coderguy614"
                        target="_blank"
                        primary
                      >
                        View GitHub Profile{" "}
                        <Icon
                          name="user"
                          size="large"
                          color="black"
                          style={{ marginLeft: "5px" }}
                        />
                      </Button>
                    </Item.Extra>
                  </Item.Content>
                </Item>
              </Item.Group>

              <Header as="h3" style={{ fontSize: "2em" }}>
                Recent Github Repos...
              </Header>
              <Item.Group divided>
                {repos.map((rep) => (
                  <Item>
                    <Icon name="github" />
                    <Item.Content>
                      <Item.Header as="a">{rep.name}</Item.Header>
                      <Item.Description>{rep.description}</Item.Description>
                      <Item.Meta>
                        Last Updated:{" "}
                        <Moment format="LLL">{rep.updated_at}</Moment>
                      </Item.Meta>

                      <Item.Extra>
                        <Button href={rep.html_url} target="_blank" secondary>
                          View Repo{" "}
                          <Icon
                            name="github square"
                            size="large"
                            color="black"
                            style={{ marginLeft: "5px" }}
                          />
                        </Button>
                      </Item.Extra>
                    </Item.Content>
                  </Item>
                ))}
              </Item.Group>
              <Button
                as="a"
                size="large"
                content="View All Github Repos"
                icon="eye"
                labelPosition="right"
                href="https://github.com/CoderGuy614?tab=repositories"
                primary
              />
            </Grid.Column>
            <Grid.Column width={6}>
              <Item>
                <Item.Image src={"https://picsum.photos/200/300"} />
                <Item.Content>
                  <Item.Header>USER HEADER</Item.Header>
                  <Item.Description>USER DESCRIPTION</Item.Description>
                  <Item.Extra>
                    <Button target="_blank" primary>
                      View Profile{" "}
                      <Icon
                        name="github square"
                        size="large"
                        color="black"
                        style={{ marginLeft: "5px" }}
                      />
                    </Button>
                  </Item.Extra>
                </Item.Content>
              </Item>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>

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

      <Footer />
    </div>
  );
};

export default Home;
