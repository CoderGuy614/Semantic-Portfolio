import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import MobileContainer from "./pages/Home/MobileContainer";
import DesktopContainer from "./pages/Home/DesktopContainer";
import { createMedia } from "@artsy/fresnel";
import PropTypes from "prop-types";
import "semantic-ui-css/semantic.min.css";
import "semantic-ui-less/semantic.less";

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});

const ResponsiveContainer = ({ children }) => (
  <MediaContextProvider>
    <DesktopContainer Media={Media}>{children}</DesktopContainer>
    <MobileContainer Media={Media}>{children}</MobileContainer>
  </MediaContextProvider>
);
ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};

const App = () => {
  return (
    <Router>
      <ResponsiveContainer>
        <Switch>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/projects" component={Projects}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="/" component={Home}></Route>
        </Switch>
      </ResponsiveContainer>
    </Router>
  );
};

export default App;
