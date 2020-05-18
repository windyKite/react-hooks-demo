import user from './user'
import books from './books'
import movies from './movies'

const Reducers = {
  ...user ,
  ...books ,
  ...movies 
}

export default Reducers