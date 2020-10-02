import React from "react";
import { Item, Image } from "semantic-ui-react";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <PageHeader
        img="https://res.cloudinary.com/deduwxk82/image/upload/v1600942834/profile-pic_oubsah.jpg"
        mainText="About"
        subText="All About Me"
      />
      <h1> This Section Coming Soon!</h1>
      <Footer />
    </div>
  );
};

export default About;
