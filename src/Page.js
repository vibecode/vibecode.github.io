import React, { useContext } from 'react'
import ShowContent from './ShowContent'
import Social from './Social'
import { reactProjects, htmlProjects } from './constants/links'
import Blob from './Blob'
import { ThemeContext } from './themeContext'
import { useSpring, animated as a } from 'react-spring'

import styles from './Page.module.scss'

function Page(props) {
  const theme = useContext(ThemeContext)

  const renderProjects = projects => {
    return projects.map(({ name, link, repo }) => {
      return (
        <li key={name}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {name}
          </a>
          {repo && (
            <div className={styles.repo_link_box}>
              <a href={repo} target="_blank" rel="noopener noreferrer">
                repo
              </a>
            </div>
          )}
        </li>
      )
    })
  }

  const appear = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 1000,
    config: {
      duration: 3500
    }
  })

  return (
    <main className={theme === 'dark' ? styles.main_dark : styles.main}>
      <div className={styles.top_container}>
        <a.div className={styles.blob_container} style={appear}>
          <Blob />
          <div className={styles.hire_box}>
            <Social />
          </div>
        </a.div>
        <div className={styles.container}>
          <p className={styles.info}>
            Hi, my name is <strong>Stanislav Ovcharov</strong>, I'm a Javascript
            developer and graphic/sound designer currently based in Amsterdam,
            Netherlands. I love making good looking apps, especially with{' '}
            <strong>React</strong> and <strong>Node</strong>. Here are some of
            the projects I've done which helped me to acquire the knowlege about
            how things work in the modern web-development world:
          </p>
        </div>
      </div>
      <ShowContent initOpen={false}>
        <div className={styles.container_links}>
          <h2 className={styles.subtitle}>React projects</h2>
          <ul>{renderProjects(reactProjects)}</ul>

          <h2 className={styles.subtitle}>Html projects</h2>
          <ul>{renderProjects(htmlProjects)}</ul>
        </div>
      </ShowContent>
    </main>
  )
}

export default Page
