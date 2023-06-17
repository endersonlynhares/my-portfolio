import { NavLink } from "react-router-dom"
import { FooterContainer, SectionIcons } from "./styles.ts"
import { useTranslation } from "react-i18next"
import { motion } from 'framer-motion';
import { ArrowRight, FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";

interface FooterProps {
  type?: "" | "about" | "projects" | "contact"
}

export const Footer = ({ type = "" }: FooterProps) => {
  const { t: TranslationLinks } = useTranslation("translation", { keyPrefix: "links" })
  const { t: TranslantionFooter } = useTranslation("translation", { keyPrefix: "footer" })
  return (
    <FooterContainer>
      <NavLink to={`/${type}`}>
        <span>
          {
            type == "" ? TranslantionFooter('go_back') : TranslantionFooter('see_more')
          }
          {TranslationLinks(type == "" ? "home" : type)}
        </span>
        <motion.div
          animate={{ x: ['0%', '100%', '0%'] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ display: 'flex', alignItems: "center" }}
        >
          <ArrowRight size={25}  />
        </motion.div>
      </NavLink>
      <SectionIcons>
        <a href="https://www.facebook.com/endersonlynhares"><FacebookLogo size={24} weight="fill" /></a>
        <a href="https://www.instagram.com/enderson_linhares/"><InstagramLogo size={24} weight="fill" /></a>
        <a href="https://github.com/endersonlynhares?tab=repositories"><GithubLogo size={24} weight="fill" /></a>
        <a href="https://www.linkedin.com/in/endersonlinhares/"><LinkedinLogo size={24} weight="fill" /></a>
      </SectionIcons>
    </FooterContainer>
  )
}