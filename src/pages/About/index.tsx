import { AboutContainer, AboutMe, ListSkill, SkillsContainer, SkillSection } from "./styles"
import meLight from "../../assets/me_avatar.svg"
import { Aperture, BezierCurve, Code, GithubLogo } from "phosphor-react"
import { Footer } from "../../components/Footer"
import { useTranslation } from "react-i18next"
import meDark from "../../assets/meDark.svg"
import { useTheme } from "styled-components"

export const About = () => {

  const { t } = useTranslation("translation", { keyPrefix: "about" })
  const {title} = useTheme()

  return (
    <AboutContainer>
      <h1>{t('hey')}</h1>
      <AboutMe>
      <img src={title == "dark" ? meDark : meLight} alt="avatar" />
        <div>
          <p>{t('i_am')}</p>
          <p>{t('perfecting_skill')}</p>
          <p>{t('focus')}</p>
        </div>
      </AboutMe>
      <ListSkill>
        <li>
          <div>
            <a href="">
              {t('programming')}
              <GithubLogo size={15} weight="bold" />
            </a>
            <a href="">{t('view')}</a>
          </div>
          <p>{t('programming_paragraph')}</p>
        </li>
        <li>
          <div>
            <a href="">
              {t('designer')}
              <Aperture size={15} weight="bold" />
            </a>
            <a href="">{t('view')}</a>
          </div>
          <p>{t('design_paragraph')}</p>
        </li>
      </ListSkill>
      <SkillsContainer>
        <SkillSection>
          <header>
            <Code size={40} weight="bold" />
            <h3>{t('developer')}</h3>
          </header>
          <p>{t('lang_I_know')}: </p>
          <ul>
            <li>
              <strong>Front-end: </strong>
              <span>HTML, CSS, JavaScript, ReactJS,<br/> TypeScript, JQuery, Bootstrap.</span>
            </li>
            <li>
              <strong>Back-end: </strong>
              <span>PHP, SQL, MongoDB</span>
            </li>
            <li>
              <strong>{t('other')}: </strong>
              <span>Python, C++, Java</span>
            </li>
          </ul>
        </SkillSection>
        <SkillSection>
          <header>
            <BezierCurve size={40} weight="bold" />
            <h3>{t('designer')}</h3>
          </header>
          <p>{t('things_i_know')}: </p>
          <ul>
            <li>
              <span>UI, Web, Apps, Folders,<br/>
                Media Social and Logos</span>
            </li>
          </ul>
          <p>{t('tools')}: </p>
          <ul>
            <li>
              <span>CorelDraw, Figma, Photoshop,<br/>Canva and Font Awesome</span>
            </li>
          </ul>
        </SkillSection>
      </SkillsContainer>
      <Footer type="projects" />
    </AboutContainer>
  )
}

