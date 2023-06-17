import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global"
import { light } from "./styles/themes/LightTheme"
import { dark } from "./styles/themes/DarkTheme"
import { Router } from "./Routers"
import { ThemeContext } from "./contexts/ThemeContext"
import UsePersistedState from "./utils/UsePersistedState"

function App() {

  const [theme, setTheme] = UsePersistedState('theme', light)

  const toggleTheme = () =>{
    setTheme(state => state.title == 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}> 
      <ThemeContext.Provider value={{toggleTheme}}>
        <Router />
      </ThemeContext.Provider>
      <GlobalStyle/>
    </ThemeProvider>
  )
}

export default App
