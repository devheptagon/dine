import {SET_LOCATION_TYPE} from './actionTypes';

const initialState = {
  location: null,
};

export function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOCATION_TYPE:
      return {...state, location: action.payload.location};

    default:
      return state;
  }
}
