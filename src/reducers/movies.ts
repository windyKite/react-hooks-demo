
const movies = {
  setMovies(state: State, action: Action){
    return { ...state, movies: action.movies}
  }
}

export default movies