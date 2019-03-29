import axios from 'axios';

// export function fetchOffers() {
//   return dispatch => {
//     dispatch(fetchOffersBegin());
//     return fetch("/offers")
//       .then(handleErrors)
//       .then(res => res.json())
//       .then(json => {
//         dispatch(fetchOffersSuccess(json.offers));
//         return json.offers;
//       })
//       .catch(error => dispatch(fetchOffersFailure(error)));
//   };
// }

// function handleErrors(response) {
//   if (!response.ok) {
//     throw Error(response.statusText);
//   }
//   return response;
// }

// export const fetchOffersSuccess = offers => ({
//   type: "FETCH_OFFERS_SUCCESS",
//   payload: { offers }
// });

// export const fetchOffersFailure = error => ({
//   type: "FETCH_OFFERS_FAILURE",
//   payload: { error }
// });

export const fetchOffersSuccess = jobOffers => ({
  type: "FETCH_OFFERS_SUCCESS",
  jobOffers
});

export const fetchOffers = () => {
  return dispatch => {
    axios.get("/api/companyoffre/all")
      .then(res => res.data)
      .then(jobOffers => {
        dispatch(fetchOffersSuccess(jobOffers));
      });
  };
};
// export const fetchOffers = () => {
//   return dispatch => {
//     axios.get("/api/companyoffers")
//       .then(res => res.json())
//       .then(jobOffers => {
//         dispatch(fetchOffersSuccess(jobOffers));
//       });
//   };
// };

export const fetchCompaniesSuccess = companies => ({
  type: "FETCH_COMPANIES_SUCCESS",
  companies
});

export const fetchCompanies = () => {
  return dispatch => {
    axios.get('/api/companyprofile/all')
      .then(res => res.data)
      .then(companies => {
        dispatch(fetchCompaniesSuccess(companies));
      });
  };
};

export const fetchAppliedSuccess = applied => ({
  type: "FETCH_APPLIED_SUCCESS",
  applied
});

export const fetchApplied = () => {
  return dispatch => {
    axios.get('/api/admin/all/haveoffer')
      .then(res => res.data)
      .then(applied => {
        dispatch(fetchAppliedSuccess(applied));
      });
  };
};

