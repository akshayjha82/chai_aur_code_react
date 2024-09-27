import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/themecontext'
import Theme from './components/Theme'
import Card from './components/Card'

function App() {
  const [theme, setTheme] = useState('light')

  const darktheme = ()=>{
    setTheme('dark');
  }

  const lighttheme = ()=>{
    setTheme('light');
  }

  useEffect(()=>{
    document.querySelector("html").classList.remove("light","dark");
    document.querySelector("html").classList.add(theme);
    
  },[theme])
  return (
    <ThemeProvider value={{theme,lighttheme,darktheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Theme/>
        </div>

        <div className="w-full max-w-sm mx-auto">
            <Card/>
        </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
