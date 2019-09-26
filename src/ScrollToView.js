import React, { useState, useRef, useEffect } from 'react'

export default function ScrollToVisible({ children, show }) {
  const box = useRef(null)

  useEffect(() => {
    if (show) {
      box.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  })

  return <section ref={box}>{children}</section>
}
