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
