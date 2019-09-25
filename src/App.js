import React, { Component } from 'react'
import Collapse from './Collapse'
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
            <>
              <span> :: </span>
              <a href={repo} target="_blank" rel="noopener noreferrer">
                repo
              </a>
            </>
          )}
        </li>
      )
    })
  }

  return (
    <main className={styles.main}>
      <div className={styles.blob_container}>
        <h1 className={styles.hi}>{'<Hi\u00A0/>'}</h1>
        <Blob />
      </div>
      <div className={styles.container}>
        <p className={styles.info}>
          My name is <strong>Stanislav Ovcharov</strong>, I'm Javascript
          developer and graphic/sound designer currently based in Amsterdam,
          Netherlands. I love making good looking apps, especially with React
          and Node. Here are some of the projects I've done which helped me to
          acquire the knowlege about how things works in the modern
          web-development world:
        </p>
      </div>
      <Collapse initOpen={false}>
        <div className={styles.container_links}>
          <h3>React projects:</h3>
          <ul>{renderProjects(reactProjects)}</ul>

          <h3>Html projects:</h3>
          <ul>{renderProjects(htmlProjects)}</ul>
        </div>
      </Collapse>
    </main>
  )
}

export default App
