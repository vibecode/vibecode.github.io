import React from 'react'
import { useSpring, animated as a } from 'react-spring'
import styles from './Loader.module.scss'

export default function Loader({ loading }) {
  const anim = useSpring({
    opacity: 0,
    from: { opacity: 1 },
    delay: 1000,
    config: {
      duration: 3000
    }
  })

  return (
    <a.div className={styles.loader_box} style={anim}>
      <div className={styles.blob}>
        <span>Hi</span>
      </div>
    </a.div>
  )
}
