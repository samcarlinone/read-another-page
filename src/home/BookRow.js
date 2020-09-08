import React from 'react'
import { createUseStyles } from 'react-jss'
import { BookCard } from './'
import { Divider, Header } from '../shared'

const useStyles = createUseStyles({
  scrollContainer: {
    width: '100vw',
    padding: 16,
    overflowX: 'auto',
    boxSizing: 'border-box',
  },
  contentContainer: {
    width: 'fit-content',
  },
  cardContainer: {
    display: 'flex',
    marginLeft: -4,
    marginRight: 24,
    '& > *': {
      margin: 4,
    },
  },
  title: {
    left: 0,
    position: 'sticky',
  },
  divider: {
    marginBottom: 8,
    marginRight: 28,
  },
})

const Home = ({name, books}) => {
  const classes = useStyles()

  return (
    <div className={classes.scrollContainer}>
      <Header text={name} className={classes.title} />
      <div className={classes.contentContainer}>
        <Divider className={classes.divider} />
        <div className={classes.cardContainer}>
          {books.map(book => (
            <BookCard key={book.title} book={book} />
          ))}
        </div>
      </div>
    </div>
    
  )
}

export default Home