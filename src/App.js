import React, { Component } from 'react'
import styles from './App.module.scss'
import { reactProjects, htmlProjects } from './constants/links'
import Blob from './Blob'

class App extends Component {
  renderReactProjects() {
    return reactProjects.map(({ name, link, repo }) => {
      return (
        <li key={name}>
          <a href={link}>{name}</a>
          <span> :: </span>
          <a href={repo}>repo</a>
        </li>
      )
    })
  }

  renderHtmlProjects() {
    return htmlProjects.map(({ name, link, repo }) => {
      return (
        <li key={name}>
          <a href={link}>{name}</a>
          <span> :: </span>
          <a href={repo}>repo</a>
        </li>
      )
    })
  }

  render() {
    return (
      <main className={styles.main}>
        <div className={styles.blob_container}>
          <h1 className={styles.hi}>{'<Hi\u00A0/>'}</h1>
          <Blob />
        </div>
        <div className={styles.container}>
          <p>
            My name is Stanislav Ovcharov, I'm Javascript developer and
            graphic/sound designer currently based in Amsterdam, Netherlands. I
            love making good looking apps, especially with React and Node. Here
            are some of the projects I've done which helped me to acquire the
            knowlege about how things works in the modern web-development world:
          </p>
          <h3>React projects:</h3>
          <ul>{this.renderReactProjects()}</ul>

          <h3>Html projects:</h3>
          <ul>{this.renderHtmlProjects()}</ul>
        </div>
      </main>
    )
  }
}

export default App
