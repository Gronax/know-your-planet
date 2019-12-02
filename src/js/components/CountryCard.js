import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Card, CardHeader, CardMedia, CardContent, Avatar, Typography } from '@material-ui/core'

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  }
}

function CountryCard (props) {
  const { classes, countries } = props

  return countries.map((country, index) => {
    return (
      <Grid item xs={12} sm={6} md={3} key={index} zeroMinWidth>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar
                alt={country.name}
                src={country.flag}
              />
            }
            title={country.name}
            subheader={country.subregion}
          />
          <CardMedia
            className={classes.media}
            image={country.flag}
            title={country.name}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {country.nativeName}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    )
  })
}

CountryCard.propTypes = {
  classes: PropTypes.object.isRequired,
  countries: PropTypes.array.isRequired
}

export default withStyles(styles)(CountryCard)
