import React from 'react'
import { createUseStyles } from 'react-jss'
import { BookRow } from './'
import { Divider } from '../shared'

const useStyles = createUseStyles({
})

const testData = [
  {title: 'Harry Potter', author: 'J.K. Rowling', genre: 'Fantasy', recommendationLevel: 3, slug: 'harry-potter'},
  {title: 'H.I.V.E.', author: 'Mark Walden', genre: 'Science Fiction', recommendationLevel: 3, slug: 'hive', imgAdjust: 14},
  {title: 'Ancillary Justice', author: 'Ann Leckie', genre: 'Science Fiction', recommendationLevel: 2, slug: 'ancillary-justice'},
  {title: 'Leviathan Wakes', author: 'James S. A. Corey', genre: 'Science Fiction', recommendationLevel: 3, slug: 'leviathan-wakes', imgAdjust: 32},
]

const Home = () => {
  const classes = useStyles()

  return (
    <>
    <BookRow books={testData} />
    <BookRow books={testData} />
    </>
  )
}

export default Home