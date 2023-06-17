import { motion } from "framer-motion";
import styled from "styled-components";

interface CardContainerProps {
  backgroundImage: string;
}

const STATUS_COLORS = {
  turquose: "rgba(67, 169, 163, 0.89), rgba(67, 169, 163, 0.89)",
  orange: "rgba(187, 135, 0, 0.94), rgba(187, 135, 0, 0.94)",
  black: "rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)",
  blue: "rgba(51, 146, 255, 0.87), rgba(51, 146, 255, 0.87)",
  lightblue: "rgba(31, 53, 64, 0.88), rgba(31, 53, 64, 0.88)",
  gray: "rgba(115, 116, 116, 0.84), rgba(115, 116, 116, 0.84)"
} as const;

interface CardContainerProps{
  statusColor: keyof typeof STATUS_COLORS
}

export const CardContainer = styled(motion.div)<CardContainerProps>`
  cursor: pointer;
  height: 30rem;
  border-radius: 10px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(0deg, ${props => STATUS_COLORS[props.statusColor]}),
  url(${props => props.backgroundImage}) no-repeat center center / cover;
  overflow: hidden;

  div{
    position: absolute;
    bottom: -100%;
    transition: 0.3s;
  }
   
`;