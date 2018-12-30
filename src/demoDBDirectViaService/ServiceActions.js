import * as api from '../apis/serviceApi.js';

export function getPlanetsSucceeded(planets) {
  return {
    type: 'FETCH_PLANETS_SUCCEEDED',
    payload: {
      planets
    }
  }
}

export function getPlanets() {
  return dispatch => {
      api.getPlanets().then(resp => {
        dispatch(getPlanetsSucceeded(resp.data));
      });
  }
}
