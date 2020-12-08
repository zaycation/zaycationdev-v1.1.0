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

import { FaGithub } from "react-icons/fa";

import scoutfi from "../images/scoutfi.png";
import snake from "../images/snake.png";

function Projects() {
  return (
    <div>
      <br />

      <h4 className="text-center text-white">Recent Projects</h4>
      <br />

      <Container fluid>
        <Row>
          <Col lg="2"></Col>
          <Col sm="12" lg="8">
            <a
              href="https://scoutfi.com/"
              target="_blank"
              rel="noreferrer"
              className="card__button"
            >
              <Card className="card-pop">
                <CardImg top src={scoutfi} />
                <CardBody>
                  <CardTitle>scoutfi.com</CardTitle>
                  <CardText>
                    Elegantly designed landing page with an appointment form to
                    generate new leads. Built with the MERN Stack.
                  </CardText>
                  <Button
                    theme="success"
                    onClick={() =>
                      window.open("https://scoutfi.com/", "_blank")
                    }
                  >
                    View Live &rarr;
                  </Button>
                </CardBody>
              </Card>
            </a>
          </Col>
          <Col lg="2"></Col>
        </Row>
        <br />
        <Row>
          <Col lg="2"></Col>
          <Col sm="12" lg="8">
            <a
              href="https://github.com/zaycation/Basic-Express-Server"
              target="_blank"
              rel="noreferrer"
              className="card__button"
            >
              <Card className="card-pop">
                <CardBody>
                  <CardTitle>Basic Express Server</CardTitle>
                  <CardText>
                    A simple, open-source express server template for new devs
                    to help guide them when setting up an Express app.
                  </CardText>
                  <Button
                    theme="success"
                    onClick={() =>
                      window.open(
                        "https://github.com/zaycation/Basic-Express-Server",
                        "_blank"
                      )
                    }
                  >
                    Get Source Code &rarr;
                  </Button>
                </CardBody>
              </Card>
            </a>
          </Col>
          <Col lg="2"></Col>
        </Row>
        <br />

        <Row>
          <Col lg="2"></Col>
          <Col sm="12" lg="8">
            <a
              href="https://github.com/zaycation/SimpleSnake"
              target="_blank"
              rel="noreferrer"
              className="card__button"
            >
              <Card className="card-pop">
                <CardImg top src={snake} />
                <CardBody>
                  <CardTitle>Simple Snake</CardTitle>
                  <CardText>
                    Open-Source Snake remake with ReactJS seeking contributions.
                    Auth and leaderboards coming soon.
                  </CardText>
                  <Button
                    theme="success"
                    onClick={() =>
                      window.open(
                        "https://github.com/zaycation/SimpleSnake",
                        "_blank"
                      )
                    }
                  >
                    View Repo &rarr;
                  </Button>
                </CardBody>
              </Card>
            </a>
          </Col>
          <Col lg="2"></Col>
        </Row>
        <br />
        <Row>
          <Col lg="2"></Col>
          <Col sm="12" lg="8">
            <a
              href="https://github.com/zaycation/hadesbot002"
              target="_blank"
              rel="noreferrer"
              className="card__button"
            >
              <Card className="card-pop">
                <CardBody>
                  <CardTitle>Hades Discord Bot</CardTitle>
                  <CardText>
                    A simple, open-source express server template for new devs
                    to help guide them when setting up an Express app.
                  </CardText>
                  <Button
                    theme="success"
                    onClick={() =>
                      window.open(
                        "https://github.com/zaycation/hadesbot002",
                        "_blank"
                      )
                    }
                  >
                    Get Source Code &rarr;
                  </Button>
                </CardBody>
              </Card>
            </a>
          </Col>
          <Col lg="2"></Col>
        </Row>
        <br />
        <Button
          block
          theme="light"
          onClick={() => window.open("https://github.com/zaycation", "_blank")}
        >
          <FaGithub /> View All Open-Source Projects <FaGithub />
        </Button>
        <br />
      </Container>
    </div>
  );
}

export default Projects;
