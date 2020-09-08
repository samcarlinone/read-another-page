import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles(theme => ({
  header: {
    fontFamily: theme.fonts.patuaOne,
    fontSize: 40,
    lineHeight: '40px',
    padding: 8,
    paddingLeft: 16,
    backgroundColor: 'white',
    borderBottom: '1px solid #aaa',
  },
}))

const Header = () => {
  const classes = useStyles()

  return (
    <div className={classes.header}>
      Read Another Page
    </div>
  )
}

export default Header