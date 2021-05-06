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

import designify from "../images/designify.png";
import jj from "../images/jj.png";
import bc from "../images/bc.png";
import ins from "../images/scoutcovered.png";
import scouttax from "../images/scouttax.png";
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
              href="https://designify.io/"
              target="_blank"
              rel="noreferrer"
              className="card__button"
            >
              <Card className="card-pop">
                <CardImg top src={designify} />
                <CardBody>
                  <CardTitle>designify.io</CardTitle>
                  <CardText>
                    Beautiful and responsive website for Southern California's
                    best website design agency! Blazing fast with awesome
                    prices.
                  </CardText>
                  <Button
                    theme="success"
                    onClick={() =>
                      window.open("https://designify.io/", "_blank")
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
              href="https://jewel-jack.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="card__button"
            >
              <Card className="card-pop">
                <CardImg top src={jj} />
                <CardBody>
                  <CardTitle>Jewel Jack</CardTitle>
                  <CardText>
                    A fun and easy to contribute to open-source point and click
                    game. Fully responsive on mobile with an awesome discord
                    community.
                  </CardText>
                  <Button
                    theme="success"
                    onClick={() =>
                      window.open("https://jewel-jack.netlify.app/", "_blank")
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
              href="https://beyondcultivation.com/"
              target="_blank"
              rel="noreferrer"
              className="card__button"
            >
              <Card className="card-pop">
                <CardImg top src={bc} />
                <CardBody>
                  <CardTitle>Beyond Cultivation</CardTitle>
                  <CardText>
                    A modern and responsive GatsbyJS blog created for furthering
                    education and open discussion related to legal cannabis
                    cultivation.
                  </CardText>
                  <Button
                    theme="success"
                    onClick={() =>
                      window.open("https://beyondcultivation.com/", "_blank")
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
              href="https://scoutcovered.com/"
              target="_blank"
              rel="noreferrer"
              className="card__button"
            >
              <Card className="card-pop">
                <CardImg top src={ins} />
                <CardBody>
                  <CardTitle>scoutinsurance.com</CardTitle>
                  <CardText>
                    Elegantly designed insurance page inspired by getjerry.com.
                    Features a random video on each page load and a multi-step
                    insurance quote form. Entire site created with GatsbyJS for
                    higher SEO rankings and blog handling.
                  </CardText>
                  <Button
                    theme="success"
                    onClick={() =>
                      window.open("https://scoutcovered.com/", "_blank")
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
              href="https://scouttax.com/"
              target="_blank"
              rel="noreferrer"
              className="card__button"
            >
              <Card className="card-pop">
                <CardImg top src={scouttax} />
                <CardBody>
                  <CardTitle>scouttax.com</CardTitle>
                  <CardText>
                    Modern landing page with a beautiful pricing section to
                    attract new customers and educate them on the business.
                    Built with the MERN Stack.
                  </CardText>
                  <Button
                    theme="success"
                    onClick={() =>
                      window.open("https://scouttax.com/", "_blank")
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
                    Hades is a discord moderation bot. Add Hades to your server
                    to help ease moderation conflicts.
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
