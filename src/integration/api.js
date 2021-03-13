const apiheader = {
  'Content-Type': 'multipart/form-data',
  authkey: '3AnTweKPbHDb3an3zZG2',
};

const baseApiUrl = 'https://cacloud.co.uk/api/dinelocal';

export const getLocalVenues = async (
  location,
  successCallback,
  errorCallback,
) => {
  var data = new FormData();
  data.append('location', location);

  let response = await fetch(baseApiUrl + '/venues/local', {
    method: 'POST',
    headers: apiheader,
    body: data,
  });
  let json = await response.json();
  if (successCallback) successCallback(json);
};

export const getMenuCategories = async (
  venueId,
  successCallback,
  errorCallback,
) => {
  var data = new FormData();
  data.append('venue_id', venueId);

  let response = await fetch(baseApiUrl + '/menu/categories', {
    method: 'POST',
    headers: apiheader,
    body: data,
  });
  if (response.status !== 200) {
    alert(await response.json());
  } else {
    let responseJson = await response.json();

    if (responseJson['return'] === true) {
      if (successCallback) {
        successCallback(responseJson['menu_categories']);
      }
    } else {
      alert('Error fetching data');
    }
  }
};

export const getMenuItems = async (
  selectedVenueId,
  selectedMenuCategoryId,
  successCallback,
  errorCallback,
) => {
  var data = new FormData();
  data.append('venue_id', selectedVenueId);
  data.append('category_id', selectedMenuCategoryId);

  let response = await fetch(baseApiUrl + '/menu/items', {
    method: 'POST',
    headers: apiheader,
    body: data,
  });
  if (response.status !== 200) {
    alert(await response.json());
  } else {
    let responseJson = await response.json();
    console.log(responseJson);
    if (responseJson['return'] === true) {
      if (successCallback) {
        successCallback(responseJson['menu_items']);
      }
    } else {
      alert('Error fetching data');
    }
  }
};

export const getItem = async (
  selectedVenueId,
  selectedItemId,
  successCallback,
  errorCallback,
) => {
  var data = new FormData();
  data.append('venue_id', selectedVenueId);

  let response = await fetch(baseApiUrl + '/menu/item/' + selectedItemId, {
    method: 'POST',
    headers: apiheader,
    body: data,
  });
  if (response.status !== 200) {
    alert(await response.json());
  } else {
    let responseJson = await response.json();
    console.log(responseJson);
    if (responseJson['return'] === true) {
      if (successCallback) {
        successCallback({
          item_id: responseJson['item_array']['id'],
          item_name: responseJson['item_array']['name'],
        });
      }
    } else {
      alert('Error fetching data');
    }
  }
};
