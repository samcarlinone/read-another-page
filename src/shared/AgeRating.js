import React from 'react'
import { createUseStyles } from 'react-jss'
import Crosshair from '../icons/Crosshair'
import Plus from '../icons/Plus'

const useStyles = createUseStyles(theme => ({
  ageRatingContainer: {
    fontFamily: theme.fonts.raleway,
    fontWeight: 700,
    fontSize: '1.25rem',

    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    zIndex: 0,
  },
  icon: {
    border: '2px solid #888',
    borderRadius: '50%',

    width: 16,
    height: 16,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    
    color: '#c51111',
    backgroundColor: 'white',
  },
  text: {
    backgroundColor: 'white',
    lineHeight: '20px',

    marginRight: 4,
  },
  textBackground: {
    border: '2px solid #888',
    borderRadius: '50%',

    width: 24,
    height: 24,
    
    position: 'absolute',
    right: 12,
    zIndex: -1,
  },
}))

const AgeRating = ({rating}) => {
  const classes = useStyles()

  const { age, aimedAt } = rating

  const symbol = aimedAt
    ? <div className={classes.icon}><Crosshair /></div>
    : <div className={classes.icon}><Plus /></div>

  return (
    <div className={classes.ageRatingContainer}>
      <div className={classes.textBackground} />
      <div className={classes.text}>{age}</div>
      {symbol}
    </div>
  )
}

export default AgeRating
