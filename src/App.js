import { useState, useEffect } from "react";

import { Container, Row, Col } from "shards-react";
import BarLoader from "react-spinners/BarLoader";
import { tada } from "react-animations";
import styled, { keyframes } from "styled-components";

import Header from "./components/header";
import About from "./components/about";
import Projects from "./components/projects";

import "./App.css";

// Module Bundlers
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

const tadaAnimation = keyframes`${tada}`;

const TadaDiv = styled.div`
  animation: 2.5s ${tadaAnimation};
`;

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loading-screen">
          <BarLoader size={400} color={"#fff"} loading={loading} width="100%" />
          <TadaDiv>
            <h2
              style={{
                color: "white",
                paddingTop: "9em",
                textAlign: "center",
              }}
            >
              zaycation.dev
            </h2>
          </TadaDiv>
          <br />
        </div>
      ) : (
        <Container className="container-fluid">
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
            <Col lg="2"></Col>
            <Col sm="12" lg="8">
              <div className="projects-bg">
                <Projects />
              </div>
            </Col>
            <Col lg="2"></Col>
          </Row>
        </Container>
      )}
    </div>
  );
}

export default App;
