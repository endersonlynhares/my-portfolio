import { useTranslation } from "react-i18next"
import { Footer } from "../../components/Footer/index.tsx"
import {ContactContainer, FormContact, InputGroup} from "./styles.ts"

export const Contact = () =>{

  const {t} = useTranslation("translation", {keyPrefix: "contact"})

  return(
    <ContactContainer>
      <h1>{t("contact_me")}</h1>
      <p>{t("my_email")} <strong>endersonlinhares.developer@gmail.com</strong></p>

      <FormContact
        action="https://formspree.io/f/mknaloqn"
        method="POST"
      >
        <InputGroup>
          <label htmlFor="name"><strong>{t("name")}</strong></label>
          <input type="text" id="name" name="name" />
        </InputGroup>
        <InputGroup>
          <label htmlFor="email"><strong>Email:</strong></label>
          <input type="text" id="email" name="email" />
        </InputGroup>
        <InputGroup>
          <label htmlFor="message"><strong>{t("message")}</strong></label>
          <textarea name="message" id="message"></textarea>
        </InputGroup>

        <button type="submit">{t("send_message")}</button>
      </FormContact>

      <Footer />
    </ContactContainer>
  )
}