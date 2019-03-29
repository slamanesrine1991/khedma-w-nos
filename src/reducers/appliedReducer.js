const initialState = [];

function appliedReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_APPLIED_SUCCESS":
      return action.applied;
    default:
      return state;
  }
}
export default appliedReducer;