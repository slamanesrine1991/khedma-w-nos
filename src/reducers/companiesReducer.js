const initialState = [];

function companiesReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_COMPANIES_SUCCESS":
      return action.companies;
    default:
      return state;
  }
}
export default companiesReducer;