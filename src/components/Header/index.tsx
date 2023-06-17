import {HeaderContainer, ProfileSection, NavLinks, ButtonNav, ListHamburguer} from "./styles"
import profile from "../../assets/profile.png"
import {CircleWavyCheck, Moon, Sun} from "phosphor-react"
// import { MenuTranslate } from "./MenuTranslate"
import {NavLink} from "react-router-dom"
import {useTranslation} from "react-i18next"
import Brasil from "../../assets/brasil.svg"
import Eua from "../../assets/united.svg"
import { useContext, useState } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"
import { useTheme } from "styled-components"
import UsePersistedState from "../../utils/UsePersistedState"
import {useEffect} from "react"

export const Header = () => {
  const { t, i18n } = useTranslation("translation", {keyPrefix: "links"})
  const {toggleTheme} = useContext(ThemeContext)
  const [language, setLanguage] = UsePersistedState('language', 'en');

  const toggleLanguage = () =>{
    setLanguage(state => state == "en" ? "ptBR" : "en")
  }

  const [open, setOpen] = useState(false)

  useEffect(() =>{
    i18n.changeLanguage(language)
  }, [i18n, language])

  const { title } = useTheme()

  return (
    <HeaderContainer>
      <ProfileSection to={"/"}>
        <img src={profile} alt="" />
        <span>Enderson Linhares</span>
        <CircleWavyCheck size={21} weight="fill" />
      </ProfileSection>
      <nav>
        <NavLinks open={open}>
          <NavLink to="/about" >{t("about")}</NavLink>
          <NavLink to="/projects" >{t("projects")}</NavLink>
          <NavLink to="/contact" >{t("contact")}</NavLink>
          
          <div onClick={toggleLanguage}>
            {language == "ptBR" ? <img src={Brasil} width="42" alt="" />: <img src={Eua} width="42" alt="" /> }
          </div>
          <ButtonNav onClick={toggleTheme}>
            {title == "light" ? <Sun size={25} weight="bold" /> : <Moon size={25} weight="bold" /> }
          </ButtonNav>
        </NavLinks>
        {<ListHamburguer onClick={() => setOpen(!open)} size={32} weight="bold" /> }
      </nav>
    </HeaderContainer>
  )
}