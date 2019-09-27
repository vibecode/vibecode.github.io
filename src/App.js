import React from 'react'
import ShowContent from './ShowContent'
import styles from './App.module.scss'
import { reactProjects, htmlProjects } from './constants/links'
import Blob from './Blob'

function App() {
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

  return (
    <main className={styles.main}>
      <div className={styles.top_container}>
        <div className={styles.blob_container}>
          <h1 className={styles.hi}>{'<Hi\u00A0/>'}</h1>
          <Blob />
        </div>
        <div className={styles.container}>
          <p className={styles.info}>
            My name is <strong>Stanislav Ovcharov</strong>, I'm Javascript
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

export default App
