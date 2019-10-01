import React, { useState } from 'react'
import Switch from './Switch'
import { ThemeContext } from './themeContext'
import { setLocalStorage, getLocalStorage } from './localStorage'
import Page from './Page'

function App() {
  const initTheme = getLocalStorage()
  const [theme, setTheme] = useState(initTheme)

  const handleSetTheme = checked => {
    const theme = checked ? 'dark' : 'light'
    setTheme(theme)
    setLocalStorage(theme)
  }
  return (
    <ThemeContext.Provider value={theme}>
      <Switch onChange={handleSetTheme} checked={theme === 'dark'} />
      <Page />
    </ThemeContext.Provider>
  )
}

export default App
