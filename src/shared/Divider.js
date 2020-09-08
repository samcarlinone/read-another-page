import React from 'react'
import { createUseStyles } from 'react-jss'
import classNames from 'classnames';

const useStyles = createUseStyles({
  line: {
    height: 2,
    background: 'linear-gradient(to right, #c51111 0%, #c51111 90%, transparent 100%)', 
  },
});

const Divider = ({className}) => {
  const classes = useStyles()

  return (
    <div className={classNames(classes.line, className)} />
  )
}

export default Divider