import React from "react"
import Fade from "react-reveal/Fade"
import personalData from "../personal-data"
import { useTranslation } from 'react-i18next';


const About = () => {
  const { t } = useTranslation()
  const data = personalData()
  return (
    <div className="secion" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <h1>{t('home.about_me.name')}</h1>
            </Fade>
            <p>
              {data.aboutParaOne}
              <br></br>
              <br></br>
              {data.aboutParaTwo}
              <br></br>
              <br></br>
              {data.aboutParaThree}
            </p>
          </div>
          <div className="image-wrapper">
            <img src={data.aboutImage} alt="about"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
