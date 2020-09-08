import React from 'react'
import { createUseStyles } from 'react-jss'
import { BookRow } from './'
import { ageRatings } from '../shared'

const useStyles = createUseStyles({
})

const testData = [
  {title: 'Harry Potter', author: 'J.K. Rowling', genre: 'Fantasy', recommendationLevel: 3, slug: 'harry-potter', ageRating: {age: ageRatings.KIDS}},
  {title: 'H.I.V.E.', author: 'Mark Walden', genre: 'Science Fiction', recommendationLevel: 3, slug: 'hive', imgAdjust: 14, ageRating: {age: ageRatings.TEEN}},
  {title: 'Ancillary Justice', author: 'Ann Leckie', genre: 'Science Fiction', recommendationLevel: 2, slug: 'ancillary-justice', ageRating: {age: ageRatings.ADULT, aimedAt: true}},
  {title: 'Leviathan Wakes', author: 'James S. A. Corey', genre: 'Science Fiction', recommendationLevel: 3, slug: 'leviathan-wakes', imgAdjust: 32, ageRating: {age: ageRatings.ADULT}},
]

const Home = () => {
  const classes = useStyles()

  return (
    <>
    <BookRow books={testData} name="Top Recommended" />
    <BookRow books={testData} name="Science Fiction" />
    </>
  )
}

export default Home