import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Header from "../components/header"
import Work from "../components/work"
import About from "../components/about"
import Skills from "../components/skills"
import Promotion from "../components/promotion"
import Footer from "../components/footer"

import '../i18n';
import { useTranslation } from 'react-i18next';

const IndexPage = () => {
  
  const { t } = useTranslation();
  
  return (
  <Layout>
    <SEO title={t('home.about.title')} />
    <Header></Header>
    <Work></Work>
    <About></About>
    <Skills></Skills>
    <Promotion></Promotion>
    <Footer></Footer> 
  </Layout>
)}

export default IndexPage
