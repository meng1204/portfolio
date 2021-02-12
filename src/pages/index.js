import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Header from "../components/Header"
import Work from "../components/Work"
import About from "../components/about"
import Skills from "../components/skills"
import Promotion from "../components/Promotion"
import Footer from "../components/Footer"

import '../i18n';
import { useTranslation } from 'react-i18next';

const IndexPage = () => {
  
  const { t, i18n } = useTranslation();
  
  return (
  <Layout>
    <SEO title="Nico Chen's Portfolio" />
    <Header></Header>
    <Work></Work>
    <About></About>
    <Skills></Skills>
    <Promotion></Promotion>
    <Footer></Footer>
  </Layout>
)}

export default IndexPage
