import React, { useState, useEffect } from 'react'
import useEventListener from '@use-it/event-listener'
import { useSpring, animated as a } from 'react-spring'
import { throttle } from 'lodash'
import ScrollToView from './ScrollToView'
import styles from './ShowContent.module.scss'

const Collapse = ({ children, initOpen }) => {
  const [show, setShow] = useState(initOpen)
  const animContent = useSpring({
    opacity: show ? 1 : 0,
    config: { duration: 1000 }
  })
  const animButton = useSpring({ opacity: show ? 0 : 1 })

  useEffect(() => {
    if (window.scrollY > 160) {
      setShow(true)
    }
  }, [])

  const handleClick = () => {
    if (initOpen) {
      return
    }
    setShow(true)
  }

  const handleScroll = () => {
    if (window.scrollY === 0) {
      setShow(false)
      return
    }

    if (window.scrollY > 0 && !show) {
      setShow(true)
      return
    }

    return
  }

  useEventListener(
    'scroll',
    throttle(handleScroll, 100, { trailing: true, leading: true })
  )

  return (
    <div className={styles.container}>
      {show || (
        <a.button
          className={styles.scroll_down}
          onClick={handleClick}
          style={animButton}
        ></a.button>
      )}
      <ScrollToView show={show}>
        <a.div className={styles.content} style={animContent}>
          {children}
        </a.div>
      </ScrollToView>
    </div>
  )
}

export default Collapse
