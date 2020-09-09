import React from 'react'
import { createUseStyles } from 'react-jss'
import { BookRow } from './'
import { ageRatings, genres } from '../data'

const useStyles = createUseStyles({
})

const testData = [
  {title: 'Harry Potter', author: 'J.K. Rowling', genre: genres.FANTASY, recommendationLevel: 3, slug: 'harry-potter', ageRating: {age: ageRatings.KIDS}},
  {title: 'H.I.V.E.', author: 'Mark Walden', genre: genres.SCIFI, recommendationLevel: 3, slug: 'hive', imgAdjust: 14, ageRating: {age: ageRatings.TEEN}},
  {title: 'Ancillary Justice', author: 'Ann Leckie', genre: genres.SCIFI, recommendationLevel: 2, slug: 'ancillary-justice', ageRating: {age: ageRatings.ADULT, aimedAt: true}},
  {title: 'Leviathan Wakes', author: 'James S. A. Corey', genre: genres.SCIFI, recommendationLevel: 3, slug: 'leviathan-wakes', imgAdjust: 32, ageRating: {age: ageRatings.ADULT}},
]

const Home = () => {
  const classes = useStyles()

  return (
    <>
      <BookRow books={testData} name="Top Recommended" />
      <BookRow books={testData.filter(book => book.genre === genres.SCIFI)} name="Science Fiction" />
    </>
  )
}

export default Home
