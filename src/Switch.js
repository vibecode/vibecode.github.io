import React from 'react'
import ReactSwitch from 'react-switch'
import { FaSun, FaMoon } from 'react-icons/fa'
import styles from './Switch.module.scss'

const Switch = ({ onChange, checked }) => {
  const handleChange = () => {
    onChange(!checked)
  }

  const sun = (
    <div className={styles.iconBox}>
      <FaSun color="orange" size={20} />
    </div>
  )
  const moon = (
    <div className={styles.iconBox}>
      <FaMoon color="orange" />
    </div>
  )

  return (
    <div className={styles.container}>
      <ReactSwitch
        onChange={handleChange}
        checked={checked}
        checkedIcon={moon}
        uncheckedIcon={sun}
        activeBoxShadow={'0 0 2px 3px #b5aefa'}
        onColor="#444"
        offColor="#1e2126"
        onHandleColor="#fef8ff"
        offHandleColor="#fef8ff"
      ></ReactSwitch>
    </div>
  )
}

export default Switch
