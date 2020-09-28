/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */
import axios from "axios";

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
  Segment,
} from "semantic-ui-react";

const carouselContainerStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
};

const githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
const githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;

const Home = () => {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadRepos();
  }, []);

  const loadRepos = async () => {
    try {
      const res = await axios.get(
        `https://api.github.com/users/coderguy614/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
      );
      if (res.data) {
        setRepos(res.data);
      }
    } catch (error) {
      setError(error);
    }
  };

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
