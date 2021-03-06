const RECEIVED = "RECEIVED";
const NEXT_PAGE = "NEXT_PAGE";
const PREVIOUS_PAGE = "PREVIOUS_PAGE";
const SET_FILTER = "SET_FILTER";

const initialSearchState = {
  page: 1,
  limit: 5,
  totalPages: 1,
  filters: { term: ''},
  results: []
};

export default function results(state = initialSearchState, action){
  switch (action.type){
    case RECEIVED:
      return received(state, action);
    case NEXT_PAGE:
      return nextPage(state);
    case PREVIOUS_PAGE:
      return previousPage(state);
    case SET_FILTER:
      return setFilter(state, action);
    default:
      return state;
  }
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
    };
  }
