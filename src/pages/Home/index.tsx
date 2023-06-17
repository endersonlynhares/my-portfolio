import { HomeContainer, HomeMain } from "./styles"
import meLight from "../../assets/me_avatar.svg"
import meDark from "../../assets/meDark.svg"
import { useTranslation } from "react-i18next"
import { useTheme } from "styled-components"
import { GlitchText } from 'glitch-text';
import { Footer } from "../../components/Footer"

export const Home = () =>{
  const { t } = useTranslation("translation", {keyPrefix: "home"})
  const {title, shadow} = useTheme()
  return(
    <HomeContainer>
      <HomeMain>
        <div>
          <h2>{t("name_apresentation")}</h2>
          <h1>
            <GlitchText theme={shadow} text={t("make")} />
          </h1>
          <p>{t("who_i_am")}</p>
          <p>{t("what_i_do")}</p>
        </div>
        <img src={title == "dark" ? meDark : meLight} alt="avatar" />
      </HomeMain>
      <Footer type="about" />
    </HomeContainer>
  )
}