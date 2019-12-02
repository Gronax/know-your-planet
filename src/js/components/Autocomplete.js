/* eslint-disable no-use-before-define */
import React from 'react'
import { Grid, TextField } from '@material-ui/core'
// import Autocomplete from '@material-ui/lab/Autocomplete'
// import { makeStyles } from '@material-ui/core/styles'
// import countries from '../utils/countries'
import CountryCard from './CountryCard'
import axios from 'axios'

const BASE_URL = 'https://restcountries.eu/rest/v2'

// ISO 3166-1 alpha-2
// ⚠️ No support for IE 11
// function countryToFlag (isoCode) {
//   return typeof String.fromCodePoint !== 'undefined' ? isoCode.toUpperCase().replace(/./g, char => String.fromCodePoint(char.charCodeAt(0) + 127397)) : isoCode
// }

// map Autocomplete values and get firstletter
// const options = countries.map(option => {
//   const firstLetter = option.label[0].toUpperCase()
//   return {
//     firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
//     ...option
//   }
// })

// const useStyles = makeStyles({
//   option: {
//     "fontSize": 15,
//     '& > span': {
//       marginRight: 10,
//       fontSize: 18
//     }
//   }
// })

export default class CountrySelect extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      countries: [],
      isFetching: false
    }

    this.onTagsChange = this.onTagsChange.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
  }

  onTagsChange = (event, values) => {
    if (values) {
      axios.get(`${BASE_URL}/alpha/${values.code}`)
        .then((response) => {
          this.setState({ countries: response.data })
          console.log('countries', this.state.countries)
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }

  onInputChange = (event) => {
    const value = event.target.value
    if (value.length > 2) {
      this.setState({ isFetching: true })
      axios.get(`${BASE_URL}/name/${value}`)
        .then((response) => {
          this.setState({ countries: response.data })
          console.log('countries', this.state.countries)
        })
        .catch((error) => {
          console.error(error)
        })
        .finally(() => {
          this.setState({ isFetching: false })
        })
    }
  }

  render () {
    const { isFetching, countries } = this.state

    return (
      <div>
        <form noValidate autoComplete="off" style={{ display: 'flex' }}>
          <TextField
            id="outlined-search"
            style={{ width: 300, margin: '1rem auto 1rem auto' }}
            label="Search country"
            type="search"
            margin="normal"
            variant="outlined"
            onChange={this.onInputChange}
          />
          {/* <Autocomplete
            id="country-select-demo"
            style={{ width: 300, margin: '1rem auto 1rem auto' }}
            // classes={{
            //   option: classes.option
            // }}
            autoHighlight
            getOptionLabel={option => option.label}
            options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
            groupBy={option => option.firstLetter}
            onChange={this.onTagsChange}
            renderOption={option => (
              <React.Fragment>
                <span>{countryToFlag(option.code)}</span>
                {option.label} ({option.code}) +{option.phone}
              </React.Fragment>
            )}
            renderInput={params => (
              <TextField
                {...params}
                label="Choose a country"
                variant="outlined"
                fullWidth
                inputProps={{
                  ...params.inputProps,
                  autoComplete: 'disabled' // disable autocomplete and autofill
                }}
              />
            )}
          /> */}
        </form>

        <Grid container
          spacing={3}
          style={{ padding: '24px' }}
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          {isFetching ? 'd' : <CountryCard countries={countries} />}
        </Grid>
      </div>
    )
  }
}
