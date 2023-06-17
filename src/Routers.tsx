import {Routes, Route, useLocation} from "react-router-dom"
import { DefaultLayout } from "./pages/layouts/DefaultLayout"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Projects } from "./pages/Projects"
import { Contact } from "./pages/Contact"
import { AnimatePresence } from "framer-motion"

export const Router = () =>{

  const location = useLocation()

  return(
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact/>} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}