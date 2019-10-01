import React, { useState } from 'react'
import { ThemeContext } from './themeContext'
import styles from './Switch.module.scss'

const Switch = ({ onChange }) => {
  const [checked, setChecked] = useState(false)

  const handleChange = () => {
    onChange(!checked)
    setChecked(!checked)
  }

  return (
    <ThemeContext.Consumer>
      {theme => (
        <div
          className={
            theme === 'dark' ? styles.container_dark : styles.container
          }
        >
          <input type="checkbox" checked={checked} onChange={handleChange} />
        </div>
      )}
    </ThemeContext.Consumer>
  )
}

export default Switch
