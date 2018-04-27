function rootReducer(state = { count: 0, data: [] }, action) {
  switch (action.type) {
    case 'ADDTODO':
      return {
        count: state.count + 1, data: [...state.data, action.data]
      }
    default:
      return state;
  }
}

export default rootReducer;
