const initialState = [];

function offersReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_OFFERS_SUCCESS":
      return action.jobOffers;
    default:
      return state;
  }
}
export default offersReducer;
