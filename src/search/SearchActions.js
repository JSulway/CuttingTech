import { search } from '../apis/searchApi';

const RECEIVED = "RECEIVED";
const NEXT_PAGE = "NEXT_PAGE";
const PREVIOUS_PAGE = "PREVIOUS_PAGE";
const SET_FILTER = "SET_FILTER";

export const actions = {
  setFilter: (filter, value) => ({ type: SET_FILTER, filter, value }),
  next: () => ({ type: NEXT_PAGE }),
  previous: () => ({ type: PREVIOUS_PAGE }),
  search: (term, page, limit) => dispatch =>
   search({ term, page, limit }).then(resp => dispatch({ type: RECEIVED, jokes: resp.data })
  )
};
