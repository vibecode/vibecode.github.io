import React from 'react'
import styles from './Social.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTelegram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFileExcel } from '@fortawesome/free-solid-svg-icons'
import Tilt from 'react-tilt'
import { isAbsolute } from 'path'
import { callbackify } from 'util'

function Social() {
  return (
    <Tilt
      className="Tilt"
      options={{ max: 35, scale: 1, perspective: 500 }}
      style={{
        height: 180,
        width: 180,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div className={styles.container}>
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
