import React, { useContext } from 'react'
import styles from './Social.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTelegram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Tilt from 'react-tilt'
import { ThemeContext } from './themeContext'

function Social() {
  const theme = useContext(ThemeContext)

  return (
    <Tilt
      className={styles.tilt}
      options={{ max: 35, scale: 1, perspective: 500 }}
    >
      <div
        className={
          theme === 'dark' ? styles.container : styles.container_light
        }
      >
        <a href="mailto:stanis.ovcharov@gmail.com">
          <FontAwesomeIcon
            icon={faEnvelope}
            size={'2x'}
            className={styles.icon}
          />
        </a>
        <a href="https://t.me/verydroll">
          <FontAwesomeIcon
            icon={faTelegram}
            size={'2x'}
            className={styles.icon}
          />
        </a>
        <a href="https://github.com/vibecode">
          <FontAwesomeIcon
            icon={faGithub}
            size={'2x'}
            className={styles.icon}
          />
        </a>
      </div>
    </Tilt>
  )
}

export default Social
