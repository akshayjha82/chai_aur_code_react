import {createContext,useContext} from "react"

 export const themeContext = createContext({
  theme: 'light',
  darktheme:()=>{},
  lighttheme:()=>{}
})

export const ThemeProvider = themeContext.Provider;

export const useTheme = () => {
  return useContext(themeContext);
}