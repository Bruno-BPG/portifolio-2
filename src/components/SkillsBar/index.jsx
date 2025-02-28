import { StyleSkillsBar } from "./style";

import { TbBrandNextjs } from "react-icons/tb";
import { SiPostgresql, SiTypescript } from "react-icons/si";
import { FaGit, FaPython } from "react-icons/fa";
import {
  // FaDocker,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNode,
  FaReact,
} from "react-icons/fa";

import { useState } from "react";

import { dataBase } from "../../dabaBase";

// import { AiFillGithub } from "react-icons/ai";

export function SkillsBar() {
  const [visivel, setVisivel] = useState(false);
  const [tecnologiaName, setTecnologiaName] = useState("");

  function ShowsVisibility(visibility, dado) {
    setTecnologiaName(dado)

    console.log(visivel, tecnologiaName)
    console.log(visivel, tecnologiaName)


    setVisivel(visibility)


  }

  return (
    <StyleSkillsBar>
      <div className="titleOfSkillsBar1">
        <b>Habilidades</b>
      </div>

      <div className="internalBoxIcon">
        <div>

          <div className="boxIcon">
            <p
              onMouseEnter={() => ShowsVisibility(true, "HTML")}
              onMouseLeave={() => ShowsVisibility(false)}
              className="icon"
            >
              {visivel == true && tecnologiaName == "HTML" && <p className="msmTechSpanBox"><p className="msmTechSpan">{tecnologiaName}</p></p>}

              <p className="iconTech"><FaHtml5 /></p>
            </p>

            <p
              onMouseEnter={() => ShowsVisibility(true, "CSS")}
              onMouseLeave={() => ShowsVisibility(false)}
              className="icon"
            >
              {visivel == true && tecnologiaName == "CSS" && <p className="msmTechSpanBox"><p className="msmTechSpan">{tecnologiaName}</p></p>}
              <p className="iconTech"><FaCss3Alt /></p>

            </p>

            <p
              onMouseEnter={() => ShowsVisibility(true, "JavaScript")}
              onMouseLeave={() => ShowsVisibility(false)}
              className="icon"
            >
              {visivel == true && tecnologiaName == "JavaScript" && <p className="msmTechSpanBox"><p className="msmTechSpan">{tecnologiaName}</p></p>}
              <p className="iconTech"><FaJs /></p>
            </p>

            <p
              onMouseEnter={() => ShowsVisibility(true, "NodeJS")}
              onMouseLeave={() => ShowsVisibility(false)}
              className="icon"
            >
              {visivel == true && tecnologiaName == "NodeJS" && <p className="msmTechSpanBox"><p className="msmTechSpan">{tecnologiaName}</p></p>}
              <p className="iconTech"><FaNode /></p>
            </p>

            <p
              onMouseEnter={() => ShowsVisibility(true, "React")}
              onMouseLeave={() => ShowsVisibility(false)}
              className="icon"
            >
              {visivel == true && tecnologiaName == "React" && <p className="msmTechSpanBox"><p className="msmTechSpan">{tecnologiaName}</p></p>}
              <p className="iconTech"><FaReact /></p>
            </p>

            <p
              onMouseEnter={() => ShowsVisibility(true, "Nextjs")}
              onMouseLeave={() => ShowsVisibility(false)}
              className="icon"
            >
              {visivel == true && tecnologiaName == "Nextjs" && <p className="msmTechSpanBox"><p className="msmTechSpan">{tecnologiaName}</p></p>}
              <p className="iconTech"><TbBrandNextjs /></p>
            </p>

            <p
              onMouseEnter={() => ShowsVisibility(true, "Postgres")}
              onMouseLeave={() => ShowsVisibility(false)}
              className="icon"
            >
              {visivel == true && tecnologiaName == "Postgres" && <p className="msmTechSpanBox"><p className="msmTechSpan">{tecnologiaName}</p></p>}
              <p className="iconTech"><SiPostgresql /></p>
            </p>

            <p
              onMouseEnter={() => ShowsVisibility(true, "TypeScript")}
              onMouseLeave={() => ShowsVisibility(false)}
              className="icon"
            >
              {visivel == true && tecnologiaName == "TypeScript" && <p className="msmTechSpanBox"><p className="msmTechSpan">{tecnologiaName}</p></p>}
              <p className="iconTech"><SiTypescript /></p>
            </p>

            <p
              onMouseEnter={() => ShowsVisibility(true, "Python")}
              onMouseLeave={() => ShowsVisibility(false)}
              className="icon"
            >
              {visivel == true && tecnologiaName == "Python" && <p className="msmTechSpanBox"><p className="msmTechSpan">{tecnologiaName}</p></p>}
              <p className="iconTech"><FaPython /></p>
            </p>

            <p
              onMouseEnter={() => ShowsVisibility(true, "Git")}
              onMouseLeave={() => ShowsVisibility(false)}
              className="icon"
            >
              {visivel == true && tecnologiaName == "Git" && <p className="msmTechSpanBox"><p className="msmTechSpan">{tecnologiaName}</p></p>}
              <p className="iconTech"><FaGit /></p>
            </p>
          </div>
        </div>
      </div>


    </StyleSkillsBar>
  );
}
