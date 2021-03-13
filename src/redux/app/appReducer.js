import {
  SET_LOCATION_TYPE,
  SET_SELECTED_VENUE_ID_TYPE,
  SET_MENU_CATEGORY_ID_TYPE,
  SET_SELECTED_ITEM_ID_TYPE,
} from './actionTypes';

const initialState = {
  location: null,
  selectedVenueId: 0,
  selectedMenuCategoryId: 0,
  selectedItemId: 0,
};

export function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOCATION_TYPE:
      return {...state, location: action.payload.location};
    case SET_SELECTED_VENUE_ID_TYPE:
      return {...state, selectedVenueId: action.payload.selectedVenueId};
    case SET_MENU_CATEGORY_ID_TYPE:
      return {
        ...state,
        selectedMenuCategoryId: action.payload.selectedMenuCategoryId,
      };
    case SET_SELECTED_ITEM_ID_TYPE:
      return {
        ...state,
        selectedItemId: action.payload.selectedItemId,
      };
    default:
      return state;
  }
}
