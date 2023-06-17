import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import styled from "styled-components";

export const Content = styled(DropdownMenu.Content)`
  background: ${props => props.theme.colors['--base-button']};
  padding: 2rem;
  border-radius: 0.5rem;
  font-size: 1.8rem;
  width: 17rem;

  z-index: 2;
`

export const ButtonTranslate = styled.button`
  width: 4.3rem;
  height: 4.3rem;
  border: 0;
  text-align: center;
  border-radius: 999px;
  background-color: ${(props) => props.theme.colors["--base-button"]};
  color: ${(props) => props.theme.colors["--base-text"]};
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors["--primary"]};
    transition: color 0.2s;
  }
`;

export const TranslateLanguage = styled(DropdownMenu.RadioGroup)`
  display: flex;
  flex-direction: column;
`

export const LanguageButton = styled(DropdownMenu.RadioItem)`
  display: flex;
  align-items: center;
  gap: 9px;
  outline: none;
  cursor: pointer;

  
  &:hover:not([data-state="checked"]){
    outline: none;
    color: ${props => props.theme.colors['--primary']};
    font-weight: bold;
  }

  &[data-state="checked"]{
    font-weight: bold;
    cursor: not-allowed;
  }

`

export const Divider = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.17);
  width: 100%;
  margin-top: 11px;
  margin-bottom: 11px;
`
