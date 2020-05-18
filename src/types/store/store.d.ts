type UserState = {
  id: string
  name: string
}

type Book = {
  id: string
  name: string
}

type BooksState = Array<Book>


// type BooksState = {
//   id: string
//   name: string
// }

type Movie = {
  id: string
  name: string
}

type MoviesState = Array<Movie>

// type MoviesState = {
//   id: string
//   name: string
// }

type State = {
  user?: UserState
  books?: BooksState
  movies?: MoviesState
}

type Action = {
  type: 'setMovies' | 'setBooks' | 'setUser',
  user?: UserState
  books?: BooksState
  movies?: MoviesState
}

interface IContextProps {
  state: State
  dispatch: React.Dispatch<Action>
}