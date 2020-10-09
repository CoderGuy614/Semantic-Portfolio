import React from "react";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import { Icon, Card, Container, Segment } from "semantic-ui-react";

const containerStyle = {
  margin: "2.75em",
  padding: "1em",
};

const iconStyle = {
  color: "#b38cb4",
  marginRight: "0.5em",
};

const descriptionStyle = {
  fontSize: "1.2em",
};

const Contact = () => {
  return (
    <div>
      <PageHeader
        img={require("../img/personal/personal4.jpg")}
        mainText="Contact"
        subText="Here's How to Reach Me"
      />
      <Container style={containerStyle}>
        <Card.Group centered stackable>
          <Card>
            <Card.Content>
              <Card.Header>Email:</Card.Header>
              <Segment
                color="teal"
                textAlign="center"
                className="contact-segment"
              >
                <Card.Description style={descriptionStyle}>
                  <Icon name="envelope open" size="large" style={iconStyle} />
                  JLutz.110@Gmail.com
                </Card.Description>
              </Segment>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>Phone:</Card.Header>
              <Segment
                color="teal"
                textAlign="center"
                className="contact-segment"
              >
                <Card.Description style={descriptionStyle}>
                  <Icon name="phone" size="large" style={iconStyle} />
                  (937) 660-8599
                </Card.Description>
              </Segment>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>LinkedIn:</Card.Header>
              <Segment
                color="teal"
                textAlign="center"
                className="contact-segment"
              >
                <Card.Description style={descriptionStyle}>
                  <a
                    href="https://www.linkedin.com/in/jonathan-tyler-lutz/"
                    target="_blank"
                  >
                    <Icon link name="linkedin" size="large" style={iconStyle} />
                  </a>
                </Card.Description>
              </Segment>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>Messenger:</Card.Header>
              <Segment
                color="teal"
                textAlign="center"
                className="contact-segment"
              >
                <Card.Description style={descriptionStyle}>
                  <Icon
                    link
                    name="facebook messenger"
                    size="large"
                    style={iconStyle}
                  />
                  Jonny Lutz
                </Card.Description>
              </Segment>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>Skype:</Card.Header>
              <Segment
                color="teal"
                textAlign="center"
                className="contact-segment"
              >
                <Card.Description style={descriptionStyle}>
                  <Icon link name="skype" size="large" style={iconStyle} />
                  Jonny_Legend
                </Card.Description>
              </Segment>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>WhatsApp:</Card.Header>
              <Segment
                color="teal"
                textAlign="center"
                className="contact-segment"
              >
                <Card.Description style={descriptionStyle}>
                  <Icon link name="whatsapp" size="large" style={iconStyle} />
                  +855 875-73193
                </Card.Description>
              </Segment>
            </Card.Content>
          </Card>
        </Card.Group>
      </Container>
      <Footer />
    </div>
  );
};

export default Contact;
