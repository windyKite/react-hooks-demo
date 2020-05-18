
const user = {
  setUser(state: State, action: Action){
    return { ...state, user: action.user}
  }
}

export default user