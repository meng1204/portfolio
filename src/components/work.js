import React from "react"
import Card from "./atoms/card"
import Fade from "react-reveal/Fade"
import { useTranslation } from 'react-i18next';


import personalData from "../personal-data"

const Work = () => {
  const { t } = useTranslation()
  const data = personalData()
  
  return (
    <div className="section" id="work">
      <div className="container">
        <div className="work-wrapper">
          <Fade bottom>
            <h1>{t('home.work.name')}</h1>
          </Fade>

          <div className="grid">
            <Fade bottom cascade>
              {data.projects.map(project => (
                <Card
                  key={project.id}
                  heading={project.title}
                  paragraph={project.para}
                  imgUrl={project.imageSrc}
                  projectLink={project.url}
                ></Card>
              ))}
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
