import React from 'react'
import { createUseStyles } from 'react-jss'
import classNames from 'classnames'

const useStyles = createUseStyles(theme => ({
  header: {
    fontFamily: theme.fonts.patuaOne,
    fontSize: '2.5rem',
    lineHeight: '40px',

    height: theme.appBarHeight,
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 16,

    backgroundColor: 'white',
    borderBottom: theme.border,
  },
}))

const Header = ({children, className}) => {
  const classes = useStyles()

  return (
    <div className={classNames(classes.header, className)}>
      {children}
    </div>
  )
}

export default Header
