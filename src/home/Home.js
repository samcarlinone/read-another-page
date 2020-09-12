import React from 'react'
import { createUseStyles } from 'react-jss'
import { BookRow, AppBar, ActionTiles } from './'
import { books, genres } from '../data'

const useStyles = createUseStyles({
})

const Home = () => {
  const classes = useStyles()

  return (
    <>
      <AppBar>Read Another Page</AppBar>
      <BookRow books={books} name="Top Recommended" />
      <ActionTiles />
      <BookRow books={books.filter(book => book.genre === genres.SCIFI)} name="Science Fiction" />
    </>
  )
}

export default Home
