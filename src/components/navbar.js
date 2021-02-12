import React , { useState } from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import { useTranslation } from 'react-i18next';
import { useUpdateEffect } from 'ahooks';


const Navbar = () => {

  let language,language_name;
  const { t, i18n } = useTranslation()

  const [lang, setLang] = useState(i18n.language);

  if(lang === 'en'){
    language = 'zh-cn';
    language_name = '中文'
  }else{
    language = 'en';
    language_name = 'English'
  }

  const handleLangChange = (language) => {
    setLang(language);
  };

  useUpdateEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);


  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div
            role="button"
            onClick={() => scrollTo("#home")}
            className="name"
            tabIndex={0}
          >
            Nico Chen.
          </div>
          <div className="links-wrapper">
            <button onClick={() => scrollTo("#work")}>{t('navMenu.work')}</button>
            <button onClick={() => scrollTo("#about")}>{t('navMenu.about')}</button>
            <button onClick={() => scrollTo("#contact")}>{t('navMenu.contact')}</button>
            <button onClick={() => handleLangChange(language)}>{language_name}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
