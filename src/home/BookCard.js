import React, { useCallback } from 'react'
import { createUseStyles } from 'react-jss'
import classNames from 'classnames/bind'
import { useHistory } from 'react-router-dom'
import BookTitleBlock from './BookTitleBlock'

const WIDTH = 340
const IMAGE_HEIGHT = 480

const SCALES = [
  1,
  1.5,
  2,
]

const useStyles = createUseStyles(theme => ({
  container: {
    cursor: 'pointer',

    borderRadius: 4,
    border: theme.border,
    backgroundColor: 'white',

    width: WIDTH,

    boxSizing: 'border-box',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',

    boxShadow: theme.shadows[2],
  },
  imageContainer: {
    width: WIDTH,
    height: IMAGE_HEIGHT,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    ...theme.imageBackgroundObject,
  },
  image: {
    width: WIDTH,
    height: IMAGE_HEIGHT,
  },
  content: {
    padding: 8,
    paddingBottom: 0,
  },
  recommendationLevel: {
    height: 6,
    padding: 1,
    width: '60%',
    border: theme.border,
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
    backgroundColor: theme.colors.accent,
  },
}))

const BookCard = ({book}) => {
  const classes = useStyles()
  const history = useHistory()

  const { title, slug, recommendationLevel } = book

  const handleClick = useCallback(() => history.push(`/details/${slug}`))

  return (
    <div className={classes.container} onClick={handleClick} onKeyUp={e => e.keyCode === 13 && handleClick()} tabIndex={0}>
      <div className={classes.imageContainer}>
        <picture className={classes.image}>
          <source srcSet={SCALES.map(scale => `/images/${slug}-cover-${scale}x.webp ${scale}x`).join(', ')} type="image/webp" />
          <source srcSet={SCALES.map(scale => `/images/${slug}-cover-${scale}x.jpg ${scale}x`).join(', ')} type="image/jpeg" />
          <img
            width={WIDTH}
            height={IMAGE_HEIGHT}
            className={classes.image}
            src={`/images/${slug}-cover-1x.jpg`}
            alt={`Cover for ${title}`}
            decoding="async"
            loading="lazy"
          />
        </picture>
      </div>
      <div className={classes.content}>
        <BookTitleBlock book={book} />
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
