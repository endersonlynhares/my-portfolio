import styled from "styled-components";

export const AboutContainer = styled.main`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 2rem;
  h1 {
    font-size: 5rem;

  }
`;

export const ListSkill = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 7rem;
  gap: 15px;
  text-align: left;

  @media screen and (max-width: 900px){
    gap: 6rem;
  }

  li {
    display: flex;
    flex-direction: column;
    gap: 10px;

    div{
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    a:nth-child(2){
      text-decoration: underline;
      font-size: 1.6rem;
      text-align: right;
    }

    a {
      font-size: 2rem;
      display: flex;
      align-items: center;
      gap: 5px;
      font-weight: 600;
      color: ${(props) => props.theme.colors["--base-text"]};
    }

    a:hover{
      text-decoration: underline;
    }

    p {
      grid-column-start: 2;
      grid-column-end: 5;
      font-size: 1.6rem;
      font-weight: 300;
      color: ${(props) => props.theme.colors["--base-text"]};
      margin-left: 1.5rem;
    }
  }
`;

export const AboutMe = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 6.5rem;

  img {
    width: 35rem;

    @media screen and (max-width: 900px){
      display: none;
    }

  }

  div {
    display: flex;
    flex-direction: column;
    font-weight: 300;
    gap: 2.5rem;
    font-size: 2.3rem;
  }
`;

export const SkillsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row nowrap;
  margin-top: 8rem;
  margin-bottom: 4rem;

  @media screen and (max-width: 900px){
    flex-flow: column nowrap;
    gap: 6rem;
  }

`;

export const SkillSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2.4rem;
  min-width: 35rem;
  
  &:first-child{
    border-right: 1px solid rgba(0, 0, 0, 0.13);
  }

  header{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;

    svg{
      background-color: ${props => props.theme.colors["--primary"]};
      color: ${props => props.theme.colors["--white"]};
      border-radius: 999px;
      padding: 5px;
    }

    h3{
      font-family: "Inter", sans-serif;
      font-weight: 800;
    }

  }

  ul{
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 1.8rem;
  }

  strong, span, p{
    font-size: 1.4rem;
  }

  p{
    color: ${props => props.theme.colors["--primary"]};
  }

`;
