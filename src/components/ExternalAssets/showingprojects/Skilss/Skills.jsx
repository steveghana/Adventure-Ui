import React, { useEffect, useRef } from "react";
import "./skills.scss";
import Grid from "./3dGrid/Grid";
import { skillData } from "./data";
import Graphskill from "./graphskill/graph";
function Skills({ showSkill, parent }) {

  useEffect(() => {
    [...document.querySelectorAll(".skillbar_percentage")].forEach((num) => {
      const handlecounter = () => {
        let count = 0;
        let target = num.querySelector(".skillpercentage").textContent;
        setInterval(() => {
          if (count < Number(target)) {
            count += 1;
            num.querySelector(".skillpercentage").textContent = count + "%";
            num.querySelector(".skillbar").style.minWidth = `${count}%`;
          } else {
            clearInterval();
            num.querySelector(".skillpercentage").textContent = target + '%';
            num.querySelector(".skillbar").style.minWidth = `${target}%`;
          }
        }, 40);
      };
      handlecounter();
    });
  }, []);
  return (
    <section class="section" id="skills">
      <div className="graph_progress">
        <div className="skills">
          {
            skillData.map(skill => (
              <div className="skillbox">

                <div className="skill-header">{skill.name}</div>
                <div className="skillbar_percentage">
                  <div className="skillbar" style={{ backgroundColor: skill.color }}></div>
                  <div className="skillpercentage" >
                    {skill.percentage}
                  </div>
                </div>
              </div>
            ))
          }

        </div>
        <Graphskill />
      </div>

      <Grid showSkill={showSkill} parent={parent} />
    </section>
  );
}

export default Skills;
