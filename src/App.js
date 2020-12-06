import { Container, Row, Col } from "shards-react";

import Header from "./components/header";
import About from "./components/about";
import Projects from "./components/projects";

import "./App.css";

// Module Bundlers
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

function App() {
  return (
    <Container className="main-container">
      <Row>
        <Col lg="2"></Col>
        <Col sm="12" lg="8">
          <div className="banner"></div>
        </Col>
        <Col lg="2"></Col>
      </Row>
      <Row>
        <Col lg="2"></Col>
        <Col sm="12" lg="8">
          <Header />
        </Col>
        <Col lg="2"></Col>
      </Row>

      <Row>
        <Col lg="2"></Col>
        <Col sm="12" lg="8">
          <About />
        </Col>
        <Col lg="2"></Col>
      </Row>

      <Row>
        <br />
        <Col lg="2"></Col>
        <Col sm="12" lg="8">
          <div className="projects-bg">
            <Projects />
          </div>
        </Col>
        <Col lg="2"></Col>
      </Row>

    </Container>
  );
}

export default App;
