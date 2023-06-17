import { useState } from "react"
import { ProjectsContainer, SectionCards, AnimatePresenceContainer, CardAnimate } from "./styles"
import { AnimatePresence } from "framer-motion"
import { Footer } from "../../components/Footer"
import { ArrowCircleLeft, GithubLogo, GlobeHemisphereWest } from "phosphor-react"
import { Card } from "./components/Card"
import { cards } from "../../cards"
import { useTranslation } from "react-i18next"


export const Projects = () => {
  const [cardSelected, setCardSelected] = useState<string | null>(null)

  const handleClickCard = (id: string | null) =>{
    setCardSelected(id)
    if(id != null){
      document.body.style.overflow = "hidden"
    }else{
      document.body.style.overflow = "visible"
    }
  }

  const cardFiltered = cards.find(card => card.id === cardSelected);
  const { t: TranslationProjects } = useTranslation("translation", {keyPrefix: "projects"})
  const {t: TranslationProjectID} = useTranslation("translation", {keyPrefix: "projectsContent"})
  return (
    <ProjectsContainer>
      <h1>{TranslationProjects('title')}</h1>

      <SectionCards>
        {
          cards.map(card => <Card key={card.id} onClick={() => handleClickCard(card.id)} cardProps={card} />)
        }
      </SectionCards>

      <AnimatePresence>
        {cardSelected && (
          <AnimatePresenceContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <CardAnimate layoutId={cardSelected}>
              <header>
                <ArrowCircleLeft size={26} onClick={() => handleClickCard(null)} />
                <span onClick={() => handleClickCard(null)}>Back to projects</span>
              </header>
              <main>
                <h2>{cardFiltered?.title}</h2>
                <img src={cardFiltered?.background} alt="" />
                <div>
                  <h2>About</h2>
                  {cardFiltered?.id && <p>{TranslationProjectID(cardFiltered.id)}</p>}
                </div>
                <div>
                  <h2>
                    <GlobeHemisphereWest size={24} weight="fill" />
                    Website
                  </h2>
                  <a href={cardFiltered?.link}>{cardFiltered?.link}</a>  
                </div>
                <div>
                  <h2>
                    <GithubLogo size={24} />
                    GitHub
                  </h2>
                  <a href={cardFiltered?.github}>{cardFiltered?.github}</a>  
                </div>
        
              </main>
              <footer>
                <a href={cardFiltered?.link}>Open Project</a>
              </footer>
            </CardAnimate>
          </AnimatePresenceContainer>
        )}
        <Footer type="contact" />
      </AnimatePresence>
    </ProjectsContainer>
  )
}