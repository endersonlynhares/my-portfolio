import {CardContainer} from "./styles"

interface Card {
  id: string,
  title: string, 
  logo: string, 
  background: string,
  color: "turquose" | "orange" | "black" | "blue" | "lightblue" | "gray"
}

interface CardProps{
  cardProps: Card,
  onClick: () => void
}

export const Card = ({onClick, cardProps: {color, background, logo}}:CardProps) =>{
  return(
    <CardContainer statusColor={color} onClick={onClick} backgroundImage={background}>
      <img src={logo} alt="" />
    </CardContainer>
  )
}