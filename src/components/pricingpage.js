import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  CardFooter,
  Button,
} from "shards-react";
import Header from "./header";
import Projects from "./projects";
import web from "../images/site-design.jpg";
import mobile from "../images/z-app.jpg";

import "../App.css";

function PricingPage() {
  return (
    <div>
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

        <br />
        <Row>
          <Col lg={2}></Col>

          <Col>
            <h3 className="text-center">Freelance Dev Packages</h3>
          </Col>
          <Col lg={2}></Col>
        </Row>
        <Row>
          <Col lg={2}></Col>
          <Col sm={6} lg={4}>
            <Card className="card-pop">
              <CardImg top src={web} />
              <CardBody>
                <CardTitle className="text-center">
                  Modern Website Design Package
                </CardTitle>
                <CardText>
                  Need a modern, yet simple website design for your current or
                  next project?
                </CardText>
                <div>
                  <ul>
                    <li>Created with React JS</li>
                    <li>Can easily be converted to a mobile app</li>
                    <li>Deployable on all hosting platforms</li>
                    <li>Up to 5 pages of content</li>
                    <li>2 design revisions allowed</li>
                  </ul>
                  <br />
                </div>
                <Button
                  block
                  theme="info"
                  className="text-center"
                  onClick={() =>
                    window.open(
                      "mailto:isaiahthomas098@gmail.com?cc=support@zaycation.dev&subject=Website Design Inquiry",
                      "_blank"
                    )
                  }
                >
                  Reach Out Today &rarr;
                </Button>
              </CardBody>
              <CardFooter className="text-center">
                Starting at $30/hr
              </CardFooter>
            </Card>
          </Col>
          <Col sm={6} lg={4}>
            <Card className="card-pop">
              <CardImg top src={mobile} />
              <CardBody>
                <CardTitle className="text-center">
                  Hybrid Mobile App Design Package
                </CardTitle>
                <CardText>
                  Have an idea for an app? Make the first steps to successfully
                  execute your idea by reaching out today.
                </CardText>
                <div>
                  <ul>
                    <li>Created with React Native</li>
                    <li>Compatible on both iOS and Android devices</li>
                    <li>
                      Deployable on iPhone App Store and Google Play Store
                    </li>
                    <li>Up to 10 pages of content</li>
                    <li>2 design revisions allowed</li>
                  </ul>
                  <br />
                </div>
                <Button
                  block
                  theme="info"
                  className="text-center"
                  onClick={() =>
                    window.open(
                      "mailto:isaiahthomas098@gmail.com?cc=support@zaycation.dev&subject=Mobile App Design Inquiry",
                      "_blank"
                    )
                  }
                >
                  Reach Out Today &rarr;
                </Button>
              </CardBody>
              <CardFooter className="text-center">
                Starting at $40/hr
              </CardFooter>
            </Card>
          </Col>
          <Col lg="2"></Col>
        </Row>
        <br />
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
    </div>
  );
}

export default PricingPage;
