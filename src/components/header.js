import React from "react"
import Fade from "react-reveal/Fade"
import personalData from "../personal-data"
import { useTranslation } from 'react-i18next';


const Header = () => {
  const { t } = useTranslation()

  const data = personalData()

  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Fade bottom>
            <h2>
              {t('home.header.intro')} {data.name}{" "}
              <span role="img" aria-label="Emoji">
                👋
              </span>
            </h2>
          </Fade>
          <Fade bottom cascade>
            <div className="heading-wrapper">
              <h1>
                {data.headerTagline[0]
                  ? data.headerTagline[0]
                  : "Building digital"}
              </h1>
              <h1>
                {" "}
                {data.headerTagline[1]
                  ? data.headerTagline[1]
                  : "products, brands"}
              </h1>
              <h1>
                {" "}
                {data.headerTagline[2]
                  ? data.headerTagline[2]
                  : "and experience"}
              </h1>
            </div>
          </Fade>
          <Fade bottom>
            <p>{data.headerParagraph}</p>
          </Fade>
          <Fade bottom>
            <a
              href={`mailto:${
                data.contactEmail ? data.contactEmail : "meng8859@gmail.com"
              }`}
              className="primary-btn"
            >
              {t('home.header.connect_email')}
            </a>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Header
