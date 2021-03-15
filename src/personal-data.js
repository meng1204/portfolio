// Skills Icons
import phpIcon from "./images/skills/php.svg"
import golangIcon from "./images/skills/golang.svg"
import jsIcon from "./images/skills/js.svg"
// import vuejsIcon from "./images/skills/vuejs.svg"
import mysqlIcon from "./images/skills/mysql.svg"
import graphqlIcon from "./images/skills/graphql.svg"
import restapiIcon from "./images/skills/restapi.svg"

// Social Icon
import githubIcon from "./images/contact/github.svg"
import linkedinIcon from "./images/contact/linkedin.svg"

// Project Images
import composerImg from "./images/projects/alphapay-php-composer.png"
import luniumallImg from "./images/projects/luniumall-shop.png"

// About
import meImg from "./images/about/me.png"

import i18n from './i18n';

const personalData = () => {

  return {
    //(Please Do Not Remove The comma(,) after every variable)
    //Change The Website Template
  
    //   Header Details ---------------------
    name: "Nico Chen",
    headerTagline: [
      //Line 1 For Header
      i18n.t("personalInfo.headerTagline.tag_1"),
      //Line 2 For Header
      i18n.t("personalInfo.headerTagline.tag_2"),
      //Line 3 For Header
      i18n.t("personalInfo.headerTagline.tag_3"),
    ],
    //   Header Paragraph
    headerParagraph:
      "",
  
    //Contact Email
    contactEmail: "meng8859@gmail.com",
  
    // End Header Details -----------------------
  
    // Work Section ------------------------
    projects: [
      {
        id: 1, //DO NOT CHANGE THIS (Please)😅
        title: i18n.t("personalInfo.project.title_1"), //Project Title - Add Your Project Title Here
        para: i18n.t("personalInfo.project.para_1"), // Add Your Service Type Here
        //Project Image - Add Your Project Image Here
        imageSrc: luniumallImg,
        //Project URL - Add Your Project Url Here
        url: "https://luniumall.com/app",
      },
      {
        id: 2, //DO NOT CHANGE THIS (Please)😅
        title: i18n.t("personalInfo.project.title_2"), //Project Title - Add Your Project Title Here
        para: i18n.t("personalInfo.project.para_2"), // Add Your Service Type Here
        //Project Image - Add Your Project Image Here
        imageSrc:
          "https://images.unsplash.com/photo-1605153864431-a2795a1b2f95?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyNTY3ODl8fGVufDB8fHw%3D&auto=format&fit=crop&w=400&q=60",
        //Project URL - Add Your Project Url Here
        url: "https://driver.luniumall.com",
      },
      {
        id: 3, //DO NOT CHANGE THIS (Please)😅
        title: i18n.t("personalInfo.project.title_3"), //Project Title - Add Your Project Title Here
        para: i18n.t("personalInfo.project.para_3"), // Add Your Service Type Here
        //Project Image - Add Your Project Image Here
        imageSrc:
          "https://images.unsplash.com/photo-1504083898675-c896ecdae86e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
        //Project URL - Add Your Project Url Here
        url: "https://yipinchuxing.com/",
      },
      {
        id: 4, //DO NOT CHANGE THIS (Please)😅
        title: i18n.t("personalInfo.project.title_4"), //Project Title - Add Your Project Title Here
        para: i18n.t("personalInfo.project.para_4"), // Add Your Service Type Here
        //Project Image - Add Your Project Image Here
        imageSrc:
          "https://images.unsplash.com/photo-1492171983775-a51717616c0d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjB8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
        //Project URL - Add Your Project Url Here
        url: "",
      },
      {
        id: 5, //DO NOT CHANGE THIS (Please)😅
        title: i18n.t("personalInfo.project.title_5"), //Project Title - Add Your Project Title Here
        para: i18n.t("personalInfo.project.para_5"), // Add Your Service Type Here
        //Project Image - Add Your Project Image Here
        imageSrc: composerImg,
        //Project URL - Add Your Project Url Here
        url: "https://github.com/meng1204/canada-wechat-alipay",
      },
      {
        id: 6, //DO NOT CHANGE THIS (Please)😅
        title: i18n.t("personalInfo.project.title_6"), //Project Title - Add Your Project Title Here
        para: i18n.t("personalInfo.project.para_6"), // Add Your Service Type Here
        //Project Image - Add Your Project Image Here
        imageSrc:
          "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAyfHxwYXN0ZWx8ZW58MHx8MHw%3D&auto=format&fit=crop&w=400&q=60",
        //Project URL - Add Your Project Url Here
        url: "",
      },
  
      /*
      If You Want To Add More Project just Copy and Paste This At The End (Update the id Respectively)
      ,{
          id: 5,
          title: 'Project Five',
          para: 'Something Amazing',
          imageSrc: "",
          url: ''
      }
      */
    ],
  
    // End Work Section -----------------------
  
    // About Secton --------------
    aboutParaOne:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    aboutParaTwo:
      "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    aboutParaThree:
      "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    aboutImage:
      meImg,
  
    //   End About Section ---------------------
  
    // Skills Section ---------------
  
    //   Import Icons from the top and link it here
  
    skills: [
      {
        id: 1,
        img: phpIcon,
        para: i18n.t("personalInfo.skill.para_1"),
      },
      {
        id: 2,
        img: jsIcon,
        para: i18n.t("personalInfo.skill.para_2"),
      },
      {
        id: 3,
        img: golangIcon,
        para: i18n.t("personalInfo.skill.para_3"),
      },
      {
        id: 4,
        img: mysqlIcon,
        para: i18n.t("personalInfo.skill.para_4"),
      },
      {
        id: 5,
        img: graphqlIcon,
        para: i18n.t("personalInfo.skill.para_5"),
      },
      {
        id: 6,
        img: restapiIcon,
        para: i18n.t("personalInfo.skill.para_6"),
      }
    ],
  
    // End Skills Section --------------------------
  
    //   Promotion Section --------------------------
  
    promotionHeading: "Heading",
    promotionPara:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    // End Promotion Section -----------------
  
    //   Contact Section --------------
  
    contactSubHeading: "",
    social: [
      // Add Or Remove The Link Accordingly
      { img: githubIcon, url: "https://github.com/meng1204" },
      {
        img: linkedinIcon,
        url: "https://www.linkedin.com/in/nico-chen/",
      }
    ],
    // End Contact Section ---------------
  }
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com



export default personalData