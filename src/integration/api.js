export const getLocalVenues = async (
  location,
  successCallback,
  errorCallback,
) => {
  var data = new FormData();
  data.append('location', location);

  let response = await fetch(
    'https://cacloud.co.uk/api/dinelocal/venues/local',
    {method: 'POST', headers: global.apiheader, body: data},
  );
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

  let response = await fetch(
    'https://cacloud.co.uk/api/dinelocal/menu/categories',
    {method: 'POST', headers: global.apiheader, body: data},
  );
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
