export default function planets(state = { planets: [] }, action) {
  switch (action.type) {
      case 'FETCH_PLANETS_SUCCEEDED': {  // >>>> The reducer now listens for the server action.
        return { planets: action.payload.planets, };
      }
      default: {
        return state;// Always fall back to returning the given state in case a reducer receives an action it can’t handle;
      }
  }
}
