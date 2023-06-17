import styled from "styled-components";
import { Link } from "react-router-dom";
import { List } from "phosphor-react";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 9rem;
  padding-right: 9rem;
  padding-top: 5rem;
  padding-bottom: 0;
  a {
    color: ${(props) => props.theme.colors["--link-text"]};
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 900px) {
      flex-direction: column;

    }

  }

  @media screen and (max-width: 900px){
    padding-left: 5rem;
    padding-right: 5rem;
    padding-top: 5rem;
    padding-bottom: 0;
  }

`;

interface NavLinksProps{
  open: boolean
}

export const NavLinks = styled.ul<NavLinksProps>`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 2rem;

  a {
    height: 3.2rem;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 2px solid transparent;
    border-bottom: 2px solid transparent;

    &:hover,
    &.active {
      border-bottom: 2px solid ${(props) => props.theme.colors["--primary"]};
      transition: border-color 0.4s;
    }
  }

  @media screen and (max-width: 900px) {
      flex-flow: column nowrap;
      justify-content: center;
      text-align: center;
      position: fixed;
      background-color: ${props => props.theme.colors["--background"]};;
      width: 100%;
      height: 100vh;
      top: 0;
      right: 0;
      z-index: 1;

      transform: ${props => props.open ? 'translateX(0)' : 'translateX(100%)'};
      transition: all 0.3s ease-in-out;
  }
`;

export const ListHamburguer = styled(List)`
  cursor: pointer;
  display: none;
  z-index: 4;

  @media screen and (max-width: 900px){
    display: block;
  }

`;

export const ProfileSection = styled(Link)`
  display: flex;
  gap: 1rem;
  align-items: center;
  font-weight: bold;
  font-size: 1.8rem;

  svg {
    color: ${(props) => props.theme.colors["--primary"]};
  }

  &:hover {
    color: ${(props) => props.theme.colors["--primary"]};
    transition: color 0.3s;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.3rem;
    img{
      width: 30px;
    }
  }
`;
export const ButtonNav = styled.button`
  width: 4.3rem;
  height: 4.3rem;
  border: 0;
  text-align: center;
  border-radius: 999px;
  background-color: ${(props) => props.theme.colors["--base-button"]};
  color: ${(props) => props.theme.colors["--base-text"]} !important;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors["--primary"]} !important;
    transition: color 0.2s;
  }

  

`;
