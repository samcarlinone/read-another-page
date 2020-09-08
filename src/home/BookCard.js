import React from 'react'
import { createUseStyles } from 'react-jss'
import classNames from 'classnames/bind'

const useStyles = createUseStyles(theme => ({
  container: {
    borderRadius: 4,
    border: '1px solid #aaa',
    backgroundColor: 'white',

    width: 340,

    boxSizing: 'border-box',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',

    boxShadow: theme.shadows[2],
  },
  imageContainer: {
    width: '100%',
    height: 480,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    paddingBottom: 4,
  },
  image: {
    width: '100%'
  },
  title: {
    fontSize: 28,
    fontFamily: theme.fonts.patuaOne,

    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',

    marginBottom: 8,
  },
  content: {
    padding: 8,
    paddingBottom: 0,
  },
  info: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginBottom: 8,
  },
  author: {
    fontFamily: theme.fonts.raleway,
    fontSize: 18,
  },
  genre: {
    fontFamily: theme.fonts.raleway,
    fontSize: 18,
    color: '#999',
  },
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
  },
  recommendationLevel: {
    height: 6,
    padding: 1,
    width: '60%',
    border: '1px solid #aaa',
    borderBottomWidth: 2,
    marginBottom: -2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  recommendationBar: {
    flex: '1 1 calc(33% - 1px)',
    backgroundColor: '#eee',
    '&:not(:first-child)': {
      borderLeft: '1px solid white',
    },
  },
  recommendationActive: {
    backgroundColor: '#c51111',
  },
}))

const BookCard = ({book}) => {
  const classes = useStyles()

  const {title, author, genre, slug, imgAdjust, recommendationLevel} = book

  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <img
          className={classes.image}
          style={{paddingTop: `${imgAdjust}px`}}
          src={`images/${slug}.jpg`}
          alt={`Cover for ${title}`}
          decoding="async"
          loading="lazy"
        />
      </div>
      <div className={classes.content}>
        <div className={classes.title} title={title}>
          {title}
        </div>
        <div className={classes.info}>
          <div>
            <div className={classes.author}>{author}</div>
            <div className={classes.genre}>{genre}</div>
          </div>
          <div className={classes.ageRatingContainer}>
            K
          </div>
        </div>
        <div className={classes.recommendationLevel}>
          <div className={classNames(classes.recommendationBar, { [classes.recommendationActive]: recommendationLevel >= 1 })}></div>
          <div className={classNames(classes.recommendationBar, { [classes.recommendationActive]: recommendationLevel >= 2 })}></div>
          <div className={classNames(classes.recommendationBar, { [classes.recommendationActive]: recommendationLevel >= 3 })}></div>
        </div>
      </div>
    </div>
  )
}

export default BookCard