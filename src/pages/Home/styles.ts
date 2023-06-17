import styled from "styled-components";
import { motion } from "framer-motion";

export const HomeContainer = styled(motion.div)`
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HomeMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  div {
    h1 {
      font-size: 8.5rem;
    }
    h2 {
      font-size: 2rem;
      color: ${(props) => props.theme.colors["--primary"]};
    }
    p {
      font-size: 2rem;
      font-weight: 300;
    }
    p + p {
      margin-top: 2rem;
    }
  }

  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 80vw;
    margin-bottom: 5rem;

    img{
      margin-top: 3rem;
      width: 70%;
    }

    div{
      h1{
        font-size: 4rem;
      }

      h2, p{
        font-size: 1.8rem;
      }
    }


  }
`;
