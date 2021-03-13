import {
  SET_LOCATION_TYPE,
  SET_SELECTED_VENUE_ID_TYPE,
  SET_MENU_CATEGORY_ID_TYPE,
  SET_SELECTED_ITEM_ID_TYPE,
} from './actionTypes';

export const setLocationAction = (val) => ({
  type: SET_LOCATION_TYPE,
  payload: {location: val},
});

export const setSelectedVenueIdAction = (val) => ({
  type: SET_SELECTED_VENUE_ID_TYPE,
  payload: {selectedVenueId: val},
});

export const setSelectedMenuCategoryIdAction = (val) => ({
  type: SET_MENU_CATEGORY_ID_TYPE,
  payload: {selectedMenuCategoryId: val},
});

export const setSelectedItemIdAction = (val) => ({
  type: SET_SELECTED_ITEM_ID_TYPE,
  payload: {selectedItemId: val},
});
