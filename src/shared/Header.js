import React from 'react'
import { createUseStyles } from 'react-jss'
import classNames from 'classnames/bind'

const useStyles = createUseStyles(theme => ({
  header: {
    fontFamily: theme.fonts.patuaOne,
    fontSize: '2rem',
  },
}));

const Divider = ({text, className}) => {
  const classes = useStyles()

  return (
    <div className={classNames(classes.header, className)}>
      {text}
    </div>
  )
}

export default Divider
