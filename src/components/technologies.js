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
    </IconContext.Provider>
  );
}

export default Technologies;
