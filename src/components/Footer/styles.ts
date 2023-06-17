import styled from "styled-components";


export const FooterContainer = styled.footer`
  align-self: flex-start;
  align-content: flex-start;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  @media screen and (max-width: 900px){
    align-self: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  a{
    display: flex;
    align-items: center;
    color: ${props => props.theme.colors["--base-text"]};
    font-family: "Playfair Display";
    font-size: 2rem;
    font-weight: 500;

    &:hover{
      text-decoration: underline;
    }

  }
`

export const SectionIcons = styled.section`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 4.8rem;

  a{
    &:hover{
      color: ${props => props.theme.colors["--primary"]};
      transition: color 0.2s;
    }
  }
`