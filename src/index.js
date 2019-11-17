import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './js/containers/App'
import './scss/base.scss'

class MyApp extends Component {
  render () {
    return <App />
  }
}

ReactDOM.render(<MyApp />, document.getElementById('root'))
