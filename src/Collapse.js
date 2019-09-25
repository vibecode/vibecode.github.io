import React, { useState } from 'react'
import styles from './Collapse.module.scss'

const Collapse = ({ children, initOpen }) => {
  const [collapse, setOpen] = useState(initOpen)

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={() => setOpen(open => !open)}>
        Open
      </button>
      <div className={collapse ? styles.content : styles.content_closed}>
        {children}
      </div>
    </div>
  )
}

export default Collapse
