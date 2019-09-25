import React, { useState } from 'react'
import styles from './Collapse.module.scss'
import { useSpring, animated } from 'react-spring'

const Collapse = ({ children, initOpen }) => {
  const [show, setOpen] = useState(initOpen)
  const anim = useSpring({ opacity: show ? 1 : 0 })

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={() => setOpen(show => !show)}>
        Open
      </button>
      {show && (
        <animated.div className={styles.content} style={anim}>
          {children}
        </animated.div>
      )}
    </div>
  )
}

export default Collapse
