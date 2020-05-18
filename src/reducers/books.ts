
const books = {
  setBooks(state: State, action: Action){
    return { ...state, books: action.books}
  }
}

export default books