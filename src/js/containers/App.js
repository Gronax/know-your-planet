import React, { Component } from 'react'
import Header from './Header'
import CountrySelect from '../components/Autocomplete'

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <CountrySelect />
      </div>
    )
  }
}

export default App
