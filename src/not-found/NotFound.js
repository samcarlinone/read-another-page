import React from 'react'
import { Link } from 'react-router-dom'
import { createUseStyles } from 'react-jss'
import { AppBar } from '../home'

const useStyles = createUseStyles(theme => ({
  fourOhFour: {
    fontFamily: theme.fonts.patuaOne,
    fontSize: '2rem',

    margin: [32, 16],
  },
}))

const NotFound = () => {
  const classes = useStyles()

  return (
    <>
      <AppBar><Link to="/">Home</Link></AppBar>
      <div className={classes.fourOhFour}>404, seems that page is missing&hellip;</div>
    </>
  )
}

export default NotFound
