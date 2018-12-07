const initialState = {
  currentTab: "search"
};

const SET_TAB = "SET_TAB";

function setTab(state, action){
  return {
    ...state,
    currentTab: action.value
  };
}

export default function main(state = initialState, action){
  switch (action.type){
    case SET_TAB:
      return setTab(state, action);
    default:
      console.log('action.type ' + action.type);
      return state;
  }
}

export const actions = {
  setTab: (value) => ({ type: SET_TAB, value })
};
