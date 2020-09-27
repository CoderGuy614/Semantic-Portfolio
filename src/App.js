import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact";
import Navigation from "./components/Navigation";
import "semantic-ui-css/semantic.min.css";
import "semantic-ui-less/semantic.less";
import "pure-react-carousel/dist/react-carousel.es.css";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/projects" component={Projects}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/" component={Home}></Route>
      </Switch>
    </Router>
  );
};

export default App;
