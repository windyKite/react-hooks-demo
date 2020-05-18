import user from './user'
import books from './books'
import movies from './movies'

const Store: State = {
  user: { ...user },
  books: [ ...books ],
  movies: [ ...movies ]
}

export default Store