import ageRatings from './ageRatings'
import genres from './genres'

const sciFi = [
  {title: 'H.I.V.E.', author: 'Mark Walden', recommendationLevel: 3, slug: 'hive', ageRating: {age: ageRatings.TEEN}},
  {title: 'Ancillary Justice', author: 'Ann Leckie', recommendationLevel: 2, slug: 'ancillary-justice', ageRating: {age: ageRatings.ADULT, aimedAt: true}},
  {title: 'Leviathan Wakes', author: 'James S. A. Corey', recommendationLevel: 3, slug: 'leviathan-wakes', ageRating: {age: ageRatings.EARLY}},
]

const fantasy = [
  {title: 'Harry Potter', author: 'J.K. Rowling', recommendationLevel: 3, slug: 'harry-potter', ageRating: {age: ageRatings.KIDS}},
]

export default [
  ...sciFi.map(b => ({ ...b, genre: genres.SCIFI })),
  ...fantasy.map(b => ({ ...b, genre: genres.FANTASY })),
]
