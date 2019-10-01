import React, { useState } from 'react'
import Switch from './Switch'
import { ThemeContext } from './themeContext'
import Page from './Page'

function App() {
  const [theme, setTheme] = useState('light')

  const handleSetTheme = checked => {
    setTheme(checked ? 'dark' : 'light')
  }
  return (
    <ThemeContext.Provider value={theme}>
      <Switch onChange={handleSetTheme} />
      <Page />
    </ThemeContext.Provider>
  )
}

export default App
