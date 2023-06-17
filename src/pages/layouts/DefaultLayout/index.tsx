import { LayoutContainer } from "./styles"
import { Outlet } from "react-router-dom"
import { Header } from "../../../components/Header"
import { AnimatePresence } from "framer-motion"
import { motion } from "framer-motion"
export const DefaultLayout = () => {

  return (
    <div>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Header />
          <LayoutContainer>
            <Outlet />
          </LayoutContainer>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}