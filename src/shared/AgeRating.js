import React from 'react'
import { createUseStyles } from 'react-jss'
import Crosshair from '../icons/Crosshair'

const useStyles = createUseStyles(theme => ({
  ageRatingContainer: {
    border: '2px solid #888',
    borderRadius: '50%',

    width: 36,
    height: 36,

    fontFamily: theme.fonts.patuaOne,
    fontSize: 24,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',

    marginRight: 16,
    marginBottom: 8,
  },
  icon: {
    border: '2px solid #888',
    borderRadius: '50%',

    width: 20,
    height: 20,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    
    color: '#c51111',
    backgroundColor: 'white',
    
    fontFamily: theme.fonts.raleway,
    fontSize: 40,
    position: 'absolute',
    bottom: -18,
  },
  text: {
    backgroundColor: 'white',
    lineHeight: '24px',
  },
}))

const AgeRating = ({rating}) => {
  const classes = useStyles()

  const {age, aimedAt} = rating

  const symbol = aimedAt
    ? <div className={classes.icon}><Crosshair /></div>
    : <div className={classes.icon}>+</div>

  return (
    <div className={classes.ageRatingContainer}>
      <div className={classes.text}>{age}</div>
      {symbol}
    </div>
  )
}

export default AgeRating
