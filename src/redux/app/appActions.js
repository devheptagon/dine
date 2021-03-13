import {SET_LOCATION_TYPE} from './actionTypes';

export const setLocationAction = (val) => ({
  type: SET_LOCATION_TYPE,
  payload: {location: val},
});
