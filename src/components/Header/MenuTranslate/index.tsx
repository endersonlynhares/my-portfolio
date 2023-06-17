import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Translate } from 'phosphor-react';
import {ButtonTranslate, TranslateLanguage, LanguageButton, Content, Divider} from "./styles"
import Brasil from "../../../assets/brasil.svg"
import Eua from "../../../assets/united.svg"
import {useTranslation} from "react-i18next"
import {useEffect} from "react"
import UsePersistedState from '../../../utils/UsePersistedState';

export const MenuTranslate = () => {
  const [language, setLanguage] = UsePersistedState('language', 'en');
  const { t, i18n} = useTranslation("translation", {keyPrefix: "languages"})


  useEffect(() =>{
    i18n.changeLanguage(language)
  }, [i18n, language])

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <ButtonTranslate className="IconButton" aria-label="Customise options">
          <Translate size={25} weight="bold" />
        </ButtonTranslate>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <Content className="DropdownMenuContent" sideOffset={5}>

          <TranslateLanguage value={language} onValueChange={setLanguage}>
            <LanguageButton value="ptBR">
              <img src={Brasil} alt="" />
             {t("portuguese")}
            </LanguageButton>
            <Divider></Divider>
            <LanguageButton value="en" >
              <img src={Eua} alt="" />
              {t("english")}
            </LanguageButton>
          </TranslateLanguage>

          <DropdownMenu.Arrow className="DropdownMenuArrow" />
        </Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
