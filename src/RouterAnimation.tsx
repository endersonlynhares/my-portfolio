import { Route } from "react-router-dom"
import { DefaultLayout } from "./pages/layouts/DefaultLayout"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Projects } from "./pages/Projects"
import { Contact } from "./pages/Contact"


export const RouterAnimation = () =>{
  return(
    <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact/>} />
    </Route>
  )
}