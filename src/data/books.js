import ageRatings from './ageRatings'
import genres from './genres'

const sciFi = [
  {title: 'H.I.V.E.', author: 'Mark Walden', recommendationLevel: 3, slug: 'hive', isbn: '9780747583707', ageRating: {age: ageRatings.TEEN}},
  {title: 'Ancillary Justice', author: 'Ann Leckie', recommendationLevel: 2, slug: 'ancillary-justice', isbn: '9780316246620', ageRating: {age: ageRatings.ADULT, aimedAt: true}},
  {title: 'Leviathan Wakes', author: 'James S. A. Corey', recommendationLevel: 3, slug: 'leviathan-wakes', isbn: '9781841499888', ageRating: {age: ageRatings.ADULT}},
]

const fantasy = [
  {title: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.K. Rowling', recommendationLevel: 3, slug: 'harry-potter', isbn: '9780780797086', ageRating: {age: ageRatings.KIDS}},
]

export default [
  ...sciFi.map(b => ({ ...b, genre: genres.SCIFI })),
  ...fantasy.map(b => ({ ...b, genre: genres.FANTASY })),
]
