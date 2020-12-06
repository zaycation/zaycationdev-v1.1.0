import React from "react";
import { IconContext } from "react-icons";

import { DiJavascript1 } from "react-icons/di";
import { DiGit } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";
import { DiNpm } from "react-icons/di";
import { DiHeroku } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { DiAws } from "react-icons/di";
import { DiVisualstudio } from "react-icons/di";
import { DiSwift } from "react-icons/di";
import { DiSass } from "react-icons/di";
import { DiRasberryPi } from "react-icons/di";
import { DiPhotoshop } from "react-icons/di";
import { DiNginx } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiBootstrap } from "react-icons/di";

function Technologies() {
  return (
    <IconContext.Provider value={{ color: "white", size: "20px" }}>
      <a href="https://www.javascript.com/" target="_blank" rel="noreferrer">
        <DiJavascript1 />
      </a>
      <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
        <DiGit />
      </a>
      <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
        <DiMongodb />
      </a>
      <a href="https://www.heroku.com/" target="_blank" rel="noreferrer">
        <DiHeroku />
      </a>
      <a href="https://aws.amazon.com/" target="_blank" rel="noreferrer">
        <DiAws />
      </a>
      <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
        <DiReact />
      </a>
      <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
        <DiNodejsSmall />
      </a>
      <a
        href="https://developer.apple.com/swift/"
        target="_blank"
        rel="noreferrer"
      >
        <DiSwift />
      </a>
      <a href="https://sass-lang.com/" target="_blank" rel="noreferrer">
        <DiSass />
      </a>
      <a href="https://www.raspberrypi.org/" target="_blank" rel="noreferrer">
        <DiRasberryPi />
      </a>
      <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">
        <DiVisualstudio />
      </a>
      <a
        href="https://www.adobe.com/products/photoshop.html"
        target="_blank"
        rel="noreferrer"
      >
        <DiPhotoshop />
      </a>
      <a
        href="https://www.w3.org/TR/2017/REC-html52-20171214/"
        target="_blank"
        rel="noreferrer"
      >
        <DiHtml5 />
      </a>
      <a href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer">
        <DiCss3 />
      </a>
      <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer">
        <DiBootstrap />
      </a>
      <a href="https://www.npmjs.com/" target="_blank" rel="noreferrer">
        <DiNpm />
      </a>
      <a href="https://nginx.org/" target="_blank" rel="noreferrer">
        <DiNginx />
      </a>
    </IconContext.Provider>
  );
}

export default Technologies;
