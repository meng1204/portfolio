import React from "react"
import Fade from "react-reveal/Fade"
import personalData from "../personal-data"
import { useTranslation } from 'react-i18next';


const Skills = () => {
  const { t } = useTranslation()
  const data = personalData()
  return (
    <div className="section">
      <div className="container">
        <div className="skills-container">
          <Fade bottom cascade>
            <h1>{t('home.skill.name')}</h1>
          </Fade>
          <div className="skills-grid">
            {data.skills.map(skill => (
              <div className="skill" key={skill.id}>
                <img src={skill.img} alt="css"></img>
                <p>{skill.para}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
