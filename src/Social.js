import React from 'react'
import styles from './Social.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTelegram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Social() {
  return (
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
        <FontAwesomeIcon icon={faGithub} size={'2x'} className={styles.icon} />
      </a>
    </div>
  )
}

export default Social
