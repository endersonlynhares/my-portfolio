import logoDictionary from "../assets/cards/logo_dict.svg"
import logoHarryPotter from "../assets/cards/logo_harry.svg"
import logoFeed from "../assets/cards/logo_feed.svg"
import logoTicTac from "../assets/cards/logo_tictac.svg"
import logoCoffee from "../assets/cards/logo.svg"
import logoCurrency from "../assets/cards/logo_currency.svg"

import backDictionary from "../assets/cards/dict.png"
import backHarry from "../assets/cards/harry.png"
import backFeed from "../assets/cards/feed.png"
import backTicTac from "../assets/cards/tiktak.png"
import backCoffee from "../assets/tour_geral.gif"
import backCurrency from "../assets/cards/currency.png"

interface Card {
  id: string,
  title: string, 
  logo: string, 
  background: string,
  color: "turquose" | "orange" | "black" | "blue" | "lightblue" | "gray",
  link: string,
  github: string
}


export const cards:Card[] = [
  {
    id: "1",
    title: "Coffee Delivery",
    logo: logoCoffee,
    background: backCoffee,
    color: "orange",
    link: "https://coffeedlvy.netlify.app/",
    github: "https://github.com/endersonlynhares/coffee-delivery"
  },
  {
    id: "2",
    title: "Dictionary Dev",
    logo: logoDictionary,
    background: backDictionary,
    color: "lightblue",
    link: "https://dictdev.netlify.app/",
    github: "https://github.com/endersonlynhares/dictionary-dev"
  },
  {
    id: "3",
    title: "Harry Potter",
    logo: logoHarryPotter,
    background: backHarry,
    color: "black",
    link: "https://cardsharrypotter.netlify.app/",
    github: "https://github.com/endersonlynhares/harry-potter-react"
  },
  {
    id: "4",
    title: "Currency Now",
    logo: logoCurrency,
    background: backCurrency,
    color: "turquose",
    link: "https://currency-now.netlify.app/",
    github: "https://github.com/endersonlynhares/currency-now"
  },
  {
    id: "5",
    title: "TicTacToe",
    logo: logoTicTac,
    background: backTicTac,
    color: "blue",
    link: "https://tickreact.netlify.app/",
    github: "https://github.com/endersonlynhares/TicTacToe"
  },
  {
    id: "6",
    title: "Ignite Feed",
    logo: logoFeed,
    background: backFeed,
    color: "gray",
    link: "https://github.com/endersonlynhares/ignite-feed-react/",
    github: "https://github.com/endersonlynhares/ignite-feed-react/"
  }
]