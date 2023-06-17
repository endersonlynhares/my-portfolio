import "styled-components"
import { light } from "../styles/themes/LightTheme"

type ThemeType = typeof light

declare module "styled-components"{
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeType {}
}