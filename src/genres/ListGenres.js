import React from 'react'
import { createUseStyles } from 'react-jss'
import { Link } from 'react-router-dom'
import { genres } from '../data'
import { AppBar } from '../home'

const useStyles = createUseStyles(theme => ({
  centerContainer: {
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    padding: 8,
  },
  gridLayout: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill,minmax(200px, 1fr))',
    gridGap: 8,
  },
  link: {
    fontFamily: theme.fonts.patuaOne,
    fontSize: '2rem',
    textDecoration: 'none',
    
    padding: 8,
    border: theme.border,
    borderRadius: 4,
    backgroundColor: 'white',

    color: `${theme.colors.text} !important`,
  },
}))

const ListGenres = () => {
  const classes = useStyles()

  return (
    <>
      <AppBar><Link to="/">Home</Link></AppBar>
      <div className={classes.centerContainer}>
        <div className={classes.gridLayout}>
          {Object.entries(genres)
            .sort((a, b) => a[1].localeCompare(b[1]))
            .map(entry =>
              <Link
                to={`/genres/${entry[0]}`}
                key={entry[0]}
                className={classes.link}
              >
                {entry[1]}
              </Link>
            )
          }
        </div>
      </div>
    </>
  )
}

export default ListGenres
