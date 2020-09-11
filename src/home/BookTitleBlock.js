import React from 'react'
import { createUseStyles } from 'react-jss'
import { AgeRating } from '../shared'

const useStyles = createUseStyles(theme => ({
  title: {
    fontSize: '1.75rem',
    fontFamily: theme.fonts.patuaOne,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',

    marginBottom: 8,
  },
  info: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginBottom: 8,
  },
  author: {
    fontFamily: theme.fonts.raleway,
    fontSize: '1.125rem',
  },
  genre: {
    fontFamily: theme.fonts.raleway,
    fontSize: '1.125rem',
    color: '#999',
  },
  metaBlock: {
    marginRight: 32,
  },
}))

const BookTitleBlock = ({book}) => {
  const classes = useStyles()
  
  const { title, author, genre, ageRating } = book

  return (
    <div>
      <div className={classes.title} title={title}>
        {title}
      </div>
      <div className={classes.info}>
        <div className={classes.metaBlock}>
          <div className={classes.author}>{author}</div>
          <div className={classes.genre}>{genre}</div>
        </div>
        <AgeRating rating={ageRating} />
      </div>
    </div>
  )
}

export default BookTitleBlock
