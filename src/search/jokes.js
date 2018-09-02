import { search } from '../apis/searchApi';

// saving response to the reducer. start by declaring some initial state
const initialState = {
  page: 1,
  limit: 5,
  totalPages: 1,
  filters: { term: "" },
  results: [],
  currentTab: "search"
};

const RECEIVED = "RECEIVED";
const NEXT_PAGE = "NEXT_PAGE";
const PREVIOUS_PAGE = "PREVIOUS_PAGE";
const SET_FILTER = "SET_FILTER";
const SET_TAB = "SET_TAB";

export function reducer(state = initialState, action){
  switch (action.type){
    case RECEIVED:
      return received(state, action);
    case NEXT_PAGE:
      return nextPage(state);
    case PREVIOUS_PAGE:
      return previousPage(state);
    case SET_FILTER:
      return setFilter(state, action);
    case SET_TAB:
      return setTab(state, action);
    default:
      return state;
  }
}

export const actions = {
  setFilter: (filter, value) => ({ type: SET_FILTER, filter, value }),
  setTab: (value) => ({ type: SET_TAB, value }),
  next: () => ({ type: NEXT_PAGE }),
  previous: () => ({ type: PREVIOUS_PAGE }),
  search: (term, page, limit) => dispatch =>
   search({ term, page, limit }).then(resp => dispatch({ type: RECEIVED, jokes: resp.data })
  )
};

function setTab(state, action){
  return {
    ...state,
    currentTab: action.value
  };
}

function setFilter(state, action){
  return {
    ...state,
    page: 1,
    filters: {
        ...state.filters,
        [action.filter]: action.value,
    }
  };
}

function nextPage(state){
  return{
    ...state,
    page: Math.min(state.page + 1, state.totalPages)
  };
}

function previousPage(state){
  return{
    ...state,
    page: Math.max(state.page - 1, 1)
  };
}

function received(state, action){
  const { jokes } = action;

  return {
    ...state,
    totalPages: jokes.total_pages,
    results: jokes.results
  }
}
