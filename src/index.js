import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import WebFont from 'webfontloader'
import smoothscroll from 'smoothscroll-polyfill'

smoothscroll.polyfill()

WebFont.load({
  google: {
    families: ['Roboto']
  }
})

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
