import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  Button,
} from "shards-react";

import scoutfi from "../images/scoutfi.png";
import snake from "../images/snake.png";

function Projects() {
  return (
    <div>
      <br />

      <h4 className="text-center text-white">Recent Projects</h4>
      <br />

      <Container>
        <Row>
          <Col lg="2"></Col>
          <Col sm="12" lg="8">
            <Card>
              <CardImg top src={scoutfi} />
              <CardBody>
                <CardTitle>scoutfi.com</CardTitle>
                <CardText>
                  Elegantly design landing page with an appointment form to
                  generate new leads. Built with the MERN Stack.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col lg="2"></Col>
        </Row>
        <br />
        <Row>
          <Col lg="2"></Col>
          <Col sm="12" lg="8">
            <Card>
              <CardBody>
                <CardTitle>Basic Express Server</CardTitle>
                <CardText>
                  A simple, open-source express server template for new devs to
                  help guide them when setting up an Express app.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col lg="2"></Col>
        </Row>
        <br />

        <Row>
          <Col lg="2"></Col>
          <Col sm="12" lg="8">
            <Card>
              <CardImg top src={snake} />
              <CardBody>
                <CardTitle>Simple Snake</CardTitle>
                <CardText>
                  Open-Source Snake remake with ReactJS seeking contributions.
                  Auth and leaderboards coming soon.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col lg="2"></Col>
        </Row>
        <br />
        <Row>
          <Col lg="2"></Col>
          <Col sm="12" lg="8">
            <Card>
              <CardBody>
                <CardTitle>Hades Discord Bot</CardTitle>
                <CardText>
                  A simple, open-source express server template for new devs to
                  help guide them when setting up an Express app.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col lg="2"></Col>
        </Row>
        <br />
        <Button block theme="info">
          View More
        </Button>
        <br />
      </Container>
    </div>
  );
}

export default Projects;
