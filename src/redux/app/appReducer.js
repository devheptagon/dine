import {
  SET_LOCATION_TYPE,
  SET_SELECTED_VENUE_ID_TYPE,
  SET_MENU_CATEGORY_ID_TYPE,
} from './actionTypes';

const initialState = {
  location: null,
  selectedVenueId: 0,
  menuCategoryId: 0,
};

export function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOCATION_TYPE:
      return {...state, location: action.payload.location};
    case SET_SELECTED_VENUE_ID_TYPE:
      return {...state, selectedVenueId: action.payload.selectedVenueId};
    case SET_MENU_CATEGORY_ID_TYPE:
      return {...state, menuCategoryId: action.payload.menuCategoryId};

    default:
      return state;
  }
}
