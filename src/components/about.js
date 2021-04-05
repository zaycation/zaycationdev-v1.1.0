import React, { useState } from "react";
import { Link } from "react-router-dom";

import BarLoader from "react-spinners/BarLoader";
import { tada } from "react-animations";
import styled, { keyframes } from "styled-components";
import { Button } from "shards-react";
//import GitHubCalendar from "react-github-calendar";

const tadaAnimation = keyframes`${tada}`;

const TadaDiv = styled.div`
  animation: 4.5s infinite ${tadaAnimation};
`;

function About() {
  const [loading] = useState(false);
  return (
    <div className="text-center about-bg">
      <br />
      <h4 className="">
        who is <strong style={{ color: "#17a2b8" }}>zaycation.dev</strong>?
      </h4>
      <BarLoader size={400} color={"#000"} loading={loading} width="50%" />{" "}
      <br />
      <p className="text-black">
        <strong>
          I'm a driven and ambitious full-stack software engineer residing
          outside of Oakland, CA.
        </strong>
      </p>
      <p className="text-black">
        I love designing user interfaces for mobile and desktop devices. I'm
        naturally inquisitive and tenacious. My project management background
        means I have a methodical approach to problem solving—and my acerbic
        temperament makes working with me a joy.
      </p>
      <p className="text-black">
        <strong style={{ color: "#17a2b8" }}>
          My goal is to build something
        </strong>{" "}
        that users feel they simply cannot live without. Or, in other words,
        something{" "}
        <strong style={{ color: "#17a2b8" }}>universally useful.</strong>
      </p>
      <p className="text-black">
        I originally sought interest in coding by creating iOS jailbreak tweaks
        and custom iOS applications. After earning most of the freeCodeCamp
        JavaScript certificates, I continued my coding journey by attending{" "}
        <a
          href="https://www.nucamp.co/bootcamp-overview/full-stack-web-mobile-development"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#17a2b8" }}
        >
          Nucamp Coding Bootcamp’s
        </a>{" "}
        Full-Stack development course. Through Nucamp, I landed a Full-Stack
        engineering position with{" "}
        <a
          href="https://scoutfi.com"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#17a2b8" }}
        >
          Scout Financial, Inc
        </a>
        , a small financial services startup in Southern California.
      </p>
      <TadaDiv>
        <h4 className="hiring__text">Hire me for a project!</h4>
      </TadaDiv>
      <br />
      <Button block theme="info">
        <Link to="/pricing" className="pricing__link">
          View Pricing →
        </Link>
      </Button>
      <br />
      <br />
      {/*
      <div>
        <GitHubCalendar username="zaycation" color="hsl(203, 82%, 33%)" />
      </div>
      <br />
      <br />
      */}
    </div>
  );
}

export default About;
