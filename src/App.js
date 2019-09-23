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
      <main className="main">
        <div className={styles.container}>
          <h3>React projects:</h3>
          <ul>{this.renderReactProjects()}</ul>

          <h3>Html projects:</h3>
          <ul>{this.renderHtmlProjects()}</ul>
        </div>
        <Blob />
      </main>
    )
  }
}

export default App
