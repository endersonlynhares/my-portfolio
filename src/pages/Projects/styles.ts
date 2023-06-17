import styled from "styled-components";
import { motion } from "framer-motion";


export const ProjectsContainer = styled.div`
  max-width: 920px;
  display: flex;
  margin: auto;
  margin-top: 9rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  h1 {
    font-size: 4.8rem;
    align-self: flex-start;
    font-weight: 900;
  }

  h2 {
    font-size: 2rem;
  }
`;

export const SectionCards = styled.section`
  margin-top: 3rem;
  max-width: 100rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 3rem;

  @media screen and (max-width: 720px){
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }

`;

export const CardAnimate = styled(motion.div)`
  position: fixed;
  height: 100%;
  width: 50rem;
  background-color: ${props => props.theme.colors["--darkall"]};
  top: 0;
  right: 0;
  

  header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 1.5rem;
    padding: 2rem;
    border-bottom: 1px solid lightgray;
    
    svg, span{
      cursor: pointer;
    }

    span:hover{
      text-decoration: underline;
    }
  }

  main{
    overflow-y: scroll;
    padding: 2rem;
    display: flex;
    height: calc(100% - 14rem);
    flex-direction: column;
    gap: 2.5rem;
    overflow-y: scroll;
    h2{
      font-family: "Inter", sans-serif;
    }
      img{
        width: 100%;
        height: 300px;
        object-fit: cover;
        border-radius: 11px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      }

      div{
        
        h2{
          display: flex;
          align-items: center;
        }

        p, a{
          font-size: 1.4rem;
          font-weight: 600;
        }

        a{
          color: #3f566e;
        }

      }

    }

    footer{
      width: 50rem;
      position: fixed;
      bottom: 0;
    
      padding: 2rem;
      background-color: ${props => props.theme.colors["--darkmiddle"]};


      display: flex;
      align-items: center;
      justify-content: center;

      a{
        color: ${props => props.theme.colors["--base-text"]};
      }

    }

    @media screen and (max-width: 900px){
      width: 90%;
      footer{
        width: 90vw;
      }
    }

`;

export const AnimatePresenceContainer = styled(motion.div)`
  background: rgba(0, 0, 0, 0.5);

  z-index: 99999;
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0px;
  right: 0px;

`;

