import React from 'react'
import { createUseStyles } from 'react-jss'
import classNames from 'classnames/bind'
import { AgeRating } from '../shared'

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

    backgroundColor: '#f3f3f3',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23b10b0b' fill-opacity='0.46'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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

  const {title, author, genre, slug, imgAdjust, ageRating, recommendationLevel} = book

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
          <AgeRating rating={ageRating} />
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