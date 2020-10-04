import React from "react";
import {
  Item,
  Header,
  Container,
  Card,
  Segment,
  Grid,
} from "semantic-ui-react";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";

const containerStyle = {
  padding: "2em",
  // margin: "1em",
};

const About = () => {
  return (
    <div>
      <PageHeader
        img={require("../img/personal/personal4.jpg")}
        mainText="About Me"
        // subText="All About Me"
      />
      <Container style={containerStyle}>
        <Item.Group>
          <Item>
            <Item.Image
              size="medium"
              src={require("../img/personal/personal1.jpg")}
            />
            <Item.Content>
              <Item.Header>Born:</Item.Header> February, 2 1985
              <hr />
              <Item.Header>Birthplace:</Item.Header> Columbus, Ohio USA
              <hr />
              <Item.Header>Current City:</Item.Header> Bali, Indonesia
              <hr />
              <Item.Header>Hobbies & Interests:</Item.Header> Travel, Scuba
              Diving, Hiking & Camping, Health & Fitness, Technology
              <hr />
              <Item.Header>Favorite Quote:</Item.Header> "Code is like humor,
              when you have to explain it, it's bad." - Cory House
              <hr />
              <Item.Header>Career Goal:</Item.Header> To be the best problem
              solver that I can be.
              <hr />
            </Item.Content>
          </Item>
        </Item.Group>

        <Segment textAlign="center">
          <Grid textAlign="center">
            {/* Start Row 1 */}
            <Grid.Row>
              <Header>Technical Work Experience</Header>
              <Card.Group centered stackable>
                <Card>
                  <Card.Content>
                    <Card.Header>Self-Employed</Card.Header>
                    <Card.Meta>April 2019 - Present</Card.Meta>
                    <p>Full Stack Javascript Developer</p>
                    <Card.Description>
                      Specializing in MERN Stack (MongoDB, ExpressJS, ReactJS,
                      NodeJS) web app development. Currently building skills
                      around Redux for global state management and advanced API
                      features with NodeJS.
                    </Card.Description>
                  </Card.Content>
                </Card>

                <Card>
                  <Card.Content>
                    <Card.Header>
                      Ohio State University Aerospace Research Center
                    </Card.Header>
                    <Card.Meta>August 2012 - January 2015</Card.Meta>
                    <p>Design Engineer</p>
                    <Card.Description>
                      Design and build complex elecro-mechanical assemblies used
                      in jet engine research experiments. Heavy emphasis on
                      instrumentation and data acquisition (temperature,
                      pressure, heat transfer) during high speed rotation.
                    </Card.Description>
                  </Card.Content>
                </Card>
                <Card>
                  <Card.Content>
                    <Card.Header>Honda of America</Card.Header>
                    <Card.Meta>April 2009 - August 2012</Card.Meta>
                    <p>Manufacturing Engineer</p>
                    <Card.Description>
                      Design and continuously improve tooling and manufacturing
                      processes in a mass production environment. Maintain a
                      budget and complete cost reduction projects. Engineering
                      tooling designs for new model design change implementation
                      for mass production.
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Card.Group>
            </Grid.Row>
            {/* Start Row 2 */}
            <Header>Education History</Header>
            <Grid.Row>
              <Card.Group centered stackable>
                <Card>
                  <Card.Content>
                    <Card.Header>Tortuga Coders Bootcamp</Card.Header>
                    <Card.Meta>February 2020 - April 2020</Card.Meta>
                    <p>Full Stack Javascript Web Development</p>
                    <Card.Description>
                      Specializing in MERN Stack (MongoDB, ExpressJS, ReactJS,
                      NodeJS) web app development.
                    </Card.Description>
                  </Card.Content>
                </Card>

                <Card>
                  <Card.Content>
                    <Card.Header>
                      TreeHouse TechDegree Online Program
                    </Card.Header>
                    <Card.Meta>October 2019 - April 2020</Card.Meta>
                    <p>Full Stack Javascript Web Development</p>
                    <Card.Description>
                      Full stack JavaScript web development program, as well as
                      SQL, JQuery, HTML & CSS
                    </Card.Description>
                  </Card.Content>
                </Card>
                <Card>
                  <Card.Content>
                    <Card.Header>The Ohio State University</Card.Header>
                    <Card.Meta>Fall 2003 - Spring 2009</Card.Meta>
                    <p>B.S. Mechanical Engineering</p>
                    <Card.Description>
                      Specializing in automotive and aerospace engineering.
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>Overall GPA: 3.1</Card.Content>
                </Card>
              </Card.Group>
            </Grid.Row>
            {/* Start Row 3 */}
            <Header>International Experience</Header>
            <Grid.Row>
              <Card.Group centered stackable>
                <Card>
                  <Card.Content>
                    <Card.Header>JL Happy Kids Education Service</Card.Header>
                    <Card.Meta>Spring 2017 - April 2019</Card.Meta>
                    <p>Founder and CEO</p>
                    <p>China, Vietnam, Cambodia and Thailand</p>
                    <Card.Description>
                      TEFL-certified, independently-contracted teaching service,
                      for math, science and English to non-native English
                      speaking students.
                    </Card.Description>
                  </Card.Content>
                </Card>

                <Card>
                  <Card.Content>
                    <Card.Header>Banmaireab School</Card.Header>
                    <Card.Meta>Spring 2015 - Spring 2017</Card.Meta>
                    <p>Science Teacher</p>
                    <p>Phuket, Thailand</p>
                    <Card.Description>
                      TEFL-certified science subject teacher for non-native
                      English speaking students. Responsible for all lesson
                      planning, classroom activites and experiments, and
                      assessments.
                    </Card.Description>
                  </Card.Content>
                </Card>
                <Card>
                  <Card.Content>
                    <Card.Header>Phuket Academic Language School</Card.Header>
                    <Card.Meta>Various Dates 2015 - 2016</Card.Meta>
                    <p>Math and Science Teacher</p>
                    <p>Phuket, Thailand</p>
                    <Card.Description>
                      Private tutoring for gifted students of math, science, and
                      English in a 1-to-1 or small group setting.
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Card.Group>
            </Grid.Row>
          </Grid>
        </Segment>
      </Container>
      <Footer />
    </div>
  );
};

export default About;
