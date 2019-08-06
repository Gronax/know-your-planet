import React from 'react'
import ReactDOM from 'react-dom'
import Button from "@material-ui/core/Button"

class Welcome extends React.Component {
  render () {
    return (
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    )
  }
}

ReactDOM.render(<Welcome />, document.getElementById('root'))
