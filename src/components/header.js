import React from "react";
import { Button } from "shards-react";
import { IconContext } from "react-icons";
import { FaGithubAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

import headshot from "../images/pfp.jpeg";

import Technologies from "./technologies";

import styled, { keyframes } from "styled-components";
import { pulse, zoomInDown, flipInX } from "react-animations";

const pulseAnimation = keyframes`${pulse}`;
const zoomAnimation = keyframes`${zoomInDown}`;
const flipAnimation = keyframes`${flipInX}`;

const PulseDiv = styled.div`
  animation: 5s infinite ${pulseAnimation};
`;

const ZoomDiv = styled.div`
  animation: 5s ${zoomAnimation};
`;

const FlipDiv = styled.div`
  animation: 3.7s ${flipAnimation};
`;

function Header() {
  
  return (
    <div className="header">
      <br />
      <FlipDiv>
        <div className="headshot">
          <img
            src={headshot}
            alt="headshot"
            width="20%"
            className="headshot-img"
          />
        </div>
      </FlipDiv>
      <div>
        <br />
        <h4 className="text-center text-white">Isaiah Thomas</h4>
        <PulseDiv>
          <h5 className="text-center text-white">
            Full-Stack Software Engineer
          </h5>
        </PulseDiv>
      </div>
      <div className="header-btns">
        <Button
          size="sm"
          theme="info"
          onClick={() =>
            window.open("mailto:isaiahthomas098@gmail.com", "_blank")
          }
        >
          Shoot me an Email
        </Button>
        <Button
          size="sm"
          theme="info"
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1ZjQjiz-IjB7ecyCkebY1QzibT5vf03Jv/view?usp=sharing",
              "_blank"
            )
          }
        >
          Download Resume
        </Button>
      </div>
      <div>
        <br />
      </div>
      <div className="social-btns">
        <Button
          outline
          size="sm"
          theme="secondary"
          onClick={() => window.open("https://github.com/zaycation", "_blank")}
        >
          <IconContext.Provider value={{ color: "white", size: "18px" }}>
            <FaGithubAlt />
          </IconContext.Provider>
        </Button>
        <Button
          outline
          size="sm"
          theme="secondary"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/isaiahthomas098/",
              "_blank"
            )
          }
        >
          <IconContext.Provider value={{ color: "white", size: "18px" }}>
            <FaLinkedin />
          </IconContext.Provider>
        </Button>
        <IconContext.Provider value={{ color: "white", size: "18px" }}>
          <FaCode />
        </IconContext.Provider>
        <Button
          outline
          size="sm"
          theme="secondary"
          onClick={() =>
            window.open("https://twitter.com/zaycationdev", "_blank")
          }
        >
          <IconContext.Provider value={{ color: "white", size: "18px" }}>
            <FaTwitter />
          </IconContext.Provider>
        </Button>
        <Button
          outline
          size="sm"
          theme="secondary"
          onClick={() => window.open("https://discord.gg/BbVFuVPTKY", "_blank")}
        >
          <IconContext.Provider value={{ color: "white", size: "18px" }}>
            <FaDiscord />
          </IconContext.Provider>
        </Button>
      </div>
      <div>
        <br />
      </div>

      <div className="skills">
        <ZoomDiv>
          <Technologies />
        </ZoomDiv>
      </div>
      <br />
      {/*
      <div>
        <DiJavascript1 />
        <DiGit />
        <DiMongodb />
        <DiHeroku />
        <DiAws />
        <DiReact />
        <DiNodejsSmall />
        <DiSwift />
        <DiSass />
        <DiRasberryPi />
        <DiVisualstudio />
        <DiPhotoshop />
        <DiHtml5 />
        <DiCss3 />
        <DiBootstrap />
        <DiNpm />
        <DiNginx />
      </div>
       */}
    </div>
  );
}

export default Header;
