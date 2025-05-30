/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */
import {
  loadRepos,
  loadUser,
} from "../../apiCore";
import Moment from "react-moment";
import React, { useState, useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import CardCarousel from "../../components/CardCarouselFeatured/CardCarousel";
import TechIcons from "../../components/TechIcons";

import {
  Button,
  Container,
  Grid,
  Header,
  Item,
  Segment,
  Icon,
  Pagination,
  List,
} from "semantic-ui-react";

const carouselContainerStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
};

const iconStyle = {
  marginRight: "10px"

}

const Home = () => {
  const [repos, setRepos] = useState([]);
  const [user, setUser] = useState({});
  const [error, setError] = useState(null)

  const paginate = (data, page, perPage) => {
    return data.filter((element, index) => {
      const upper = page * perPage - 1;
      const lower = page * perPage - perPage;
      return index <= upper && index >= lower;
    });
  };

  const [ghPage, setGhPage] = useState(1);
  const [perPage, setPerPage] = useState(3);
 

  useEffect(() => {
    loadRepos()
      .then((reps) => setRepos(reps))
      .catch((err) => setError(err));
    loadUser()
      .then((usr) => setUser(usr))
      .catch((err) => setError(err));
  }, []);

  const handlePageChange = (e, data) =>
     setGhPage(data.activePage) 


  const CodeIcon = () => {
    return(
    <Icon name='code' style={iconStyle} className='primaryColor' />)
  }

  return (
    <div>
      <PageHeader
        img={require("../../img/personal/profile-pic.png")}
        mainText="Jonny Lutz"
        subText={"Front End Engineer"}
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
                Modern Web Application Design and Development
              </Header>
              <Header as="h5" style={{ fontSize: "1.33em", marginTop: "2em" }}>
                Available Services:
              </Header>
              <List style={{ fontSize: "1.33em" }}>

                <List.Item><CodeIcon />Custom API Design</List.Item>
                <List.Item><CodeIcon />NoSQL & SQL Databases</List.Item>
                <List.Item><CodeIcon />Responsive Website Design</List.Item>
                <List.Item><CodeIcon />Progressive Web Apps (PWA's) </List.Item>
                <List.Item><CodeIcon />Mobile Apps (React Native) </List.Item>
                <List.Item><CodeIcon />Custom User Interface (UI) Design</List.Item>
                <List.Item><CodeIcon />
                  Project Management from Concept to Deployment
                </List.Item>
              </List>
            </Grid.Row>
          </Grid.Column>
          <Grid.Column floated="right" width={5}>
            <TechIcons />
          </Grid.Column>
        </Grid>
      </Segment>
      {/* Github Section */}
      <Container style={{ padding: "2em 0em" }}>
        <Grid celled="internally" stackable>
          <Grid.Row>
            <Grid.Column width={16}>
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
                Github Repositories...
              </Header>
              <Item.Group divided>
                {repos &&
                  paginate(repos, ghPage, perPage).map((rep) => (
                    <Item key={rep.id}>
                      <Item.Content>
                        <Icon name="github" />
                        <Item.Header as="a">{rep.name}</Item.Header>
                        <Item.Description>{rep.description}</Item.Description>
                        <Item.Meta>
                          Last Updated:{" "}
                          <Moment format="LLL">{rep.updated_at}</Moment>
                        </Item.Meta>

                        <Item.Extra>
                          <Button
                            floated="right"
                            href={rep.html_url}
                            target="_blank"
                            secondary
                          >
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
              <p style={{ marginTop: "1em" }}>View More Repos...</p>
              <Pagination
                activePage={ghPage}
                style={{ maxWidth: "100%", marginBottom: "1em" }}
                totalPages={Math.ceil(repos.length / perPage)}
                boundaryRange={0}
                onPageChange={(e, data) => handlePageChange(e, data)}
              />
              <br />
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

            {/* CodeWars Section */}

            {/* <Grid.Column width={8}>
              <Header as="h1" className="primaryColor">
                <Icon name="code" size="large" />
                CodeWars Profile
              </Header>

              <Item.Group>
                <Item>
                  <Item.Image
                    circular
                    size="small"
                    src={require("../../img/tech-icons/codewars.jpeg")}
                  />
                  <Item.Content verticalAlign="middle">
                    <Item.Header>{codewarsUser.username}</Item.Header>
                    <Item.Meta>Honor: {codewarsUser.honor}</Item.Meta>
                    <Item.Description>
                      Rank: {codewarsUser.ranks.overall.name}
                    </Item.Description>
                    <Item.Description>
                      Challenges Completed:
                      {codewarsUser.codeChallenges.totalCompleted}
                    </Item.Description>
                    <Item.Extra>
                      <Button
                        href="https://codewars.com"
                        target="_blank"
                        primary
                      >
                        Go to CodeWars{" "}
                        <Icon
                          name="arrow right"
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
                Completed Kata...
              </Header>
              <Item.Group divided>
                {codewarsChallenges &&
                  paginate(codewarsChallenges, cwPage, perPage).map((chal) => (
                    <Item key={chal.id}>
                      <Icon name="code" />
                      <Item.Content>
                        <Item.Header as="a">Name: {chal.name}</Item.Header>
                        <Item.Description>
                          Language: {chal.completedLanguages[0]}
                        </Item.Description>
                        <Item.Meta>
                          Completed On:{" "}
                          <Moment format="LLL">{chal.completedAt}</Moment>
                        </Item.Meta>

                        <Item.Extra>
                          <Button
                            href={`https://codewars.com/kata/${chal.slug}`}
                            target="_blank"
                            secondary
                          >
                            View This Challenge{" "}
                            <Icon
                              name="arrow right"
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
              <p style={{ marginTop: "1em" }}>View More Kata...</p>
              <Pagination
                activePage={cwPage}
                style={{ maxWidth: "100%", marginBottom: "1em" }}
                totalPages={Math.ceil(codewarsChallenges.length / perPage)}
                boundaryRange={0}
                onPageChange={(e, data) => handlePageChange(e, data, "cw")}
              />
            </Grid.Column> */}
          </Grid.Row>
        </Grid>
      </Container>

      <Footer />
    </div>
  );
};

export default Home;
