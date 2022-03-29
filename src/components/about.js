import React, { useState } from "react";
import BarLoader from "react-spinners/BarLoader";

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
          within the Greater Los Angeles Area.
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
        and self teaching Obj-C and Swift. I also spent time earning all
        certificates from{" "}
        <a
          href="https://www.freecodecamp.org/"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#17a2b8" }}
        >
          freeCodeCamp's{" "}
        </a>
        JavaScript bootcamp. Later, I continued my coding journey by attending{" "}
        <a
          href="https://www.nucamp.co/bootcamp-overview/full-stack-web-mobile-development"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#17a2b8" }}
        >
          Nucamp Coding Bootcamp’s
        </a>{" "}
        Full-Stack development course. Today, I work as a QA Engineer @{" "}
        <a
          href="https://skool.com"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#17a2b8" }}
        >
          Skool{" "}
        </a>
        - a modern LMS focused on providing a beautiful, intuitive, and engaging
        learning experience.
      </p>
    </div>
  );
}

export default About;
