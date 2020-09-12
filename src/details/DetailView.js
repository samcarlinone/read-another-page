import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import { books } from '../data';
import {BookTitleBlock, AppBar} from '../home';
import classNames from 'classnames';

const useStyles = createUseStyles(theme => ({
  detailsRoot: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',

    minHeight: `calc(100vh - ${theme.appBarHeight}px)`,
  },
  card: {
    border: theme.border,
    borderRadius: 4,

    boxShadow: theme.shadows[2],

    backgroundColor: '#FFF',
    padding: 16,
    margin: 8,

    boxSizing: 'border-box',
    maxWidth: 'calc(100vw - 16px)',
  },
  coverImage: {
    padding: 0,
    '@media (min-width: 800px)': {
      maxWidth: '30vmin',
    },
    '@media (min-width: 1280px)': {
      maxWidth: '40vmin',
    },
    ...theme.imageBackgroundObject,
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  description: {
    fontFamily: theme.fonts.raleway,
    fontSize: '1rem',
    maxWidth: '40rem',
    lineHeight: '1.3rem',
  },
  linksTitle: {
    fontFamily: theme.fonts.patuaOne,
    fontSize: '1.5rem',
  },
  link: {
    fontFamily: theme.fonts.raleway,
    fontSize: '1.25rem',

    backgroundColor: theme.colors.accent,
    color: '#FFF !important',

    padding: 8,
    paddingRight: 12,
    height: '1.5rem',
    borderRadius: 'calc(1.5rem + 8px)',

    margin: [8, 0],
    display: 'block',

    boxShadow: theme.shadows[2],
  },
  linkIcon: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignContent: 'center',
    width: 24,
    height: 24,
    borderRadius: '50%',

    color: 'black',
    backgroundColor: '#FFF',

    marginRight: 8,
  },
  goodreads: {
    position: 'relative',
    top: -3,

    fontFamily: theme.fonts.patuaOne,
    fontSize: 22,
    lineHeight: '22px',
  },
  recommendationContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  recommendationLevel: {
    color: theme.colors.accent,
    fontFamily: theme.fonts.patuaOne,
    fontSize: '3rem',

    paddingRight: 8,
    marginRight: 8,
    borderRight: `2px solid ${theme.colors.accent}`,
  },
  recommendationTitle: {
    fontFamily: theme.fonts.raleway,
    fontSize: '1.25rem',
  },
}))

const DetailView = () => {
  const classes = useStyles()
  const { slug } = useParams()

  const book = books.find(b => b.slug === slug)

  const description = book.description 
    ?? `It looks like this book doesn't have a summary yet.
    But never fear, this book is here for a reason.
    If you still aren't convinced, perhaps the summary over on Goodreads could give you enough info to read with confidence.`

  return (
    <>
      <AppBar>
        <Link to="/">Home</Link>
      </AppBar>
      <div className={classes.detailsRoot}>
        <img src={`/images/${slug}.jpg`} className={classNames(classes.card, classes.coverImage)} />
        <div className={classes.contentContainer}>
          <div className={classes.card}>
            <BookTitleBlock book={book} />
          </div>
          <div className={classes.card}>
            <div className={classes.description}>{description}</div>
          </div>
          <div className={classNames(classes.card, classes.recommendationContainer)}>
            <div className={classes.recommendationLevel}>{book.recommendationLevel}</div>
            <div className={classes.recommendationTitle}>Recommendation<br />Level</div>
          </div>
          <div className={classes.card}>
            <div className={classes.linksTitle}>Links</div>
            <a
              href={`https://www.goodreads.com/search?q=${book.isbn}`}
              className={classes.link}
              target="_blank"
            >
              <div className={classes.linkIcon}>
                <div className={classes.goodreads}>g</div>
              </div>
              Goodreads
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailView
