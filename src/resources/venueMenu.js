import React, {useState, useEffect} from 'react';
import {Button, View, Text, TouchableOpacity, FlatList} from 'react-native';

export const VenueMenu = ({navigation}) => {
  const [MenuCategoryArray, setMenuCategoryArray] = useState();

  useEffect(() => {
    getMenuCategories();
  }, []);

  async function getMenuCategories() {
    var data = new FormData();
    data.append('venue_id', global.selected_venue_id);

    let response = await fetch(
      'https://cacloud.co.uk/api/dinelocal/menu/categories',
      {method: 'POST', headers: global.apiheader, body: data},
    );
    if (response.status !== 200) {
      alert(await response.json());
    } else {
      let responseJson = await response.json();
      console.log(responseJson);
      if (responseJson['return'] === true) {
        setMenuCategoryArray(responseJson['menu_categories']);
      } else {
        alert('Error fetching data');
      }
    }
  }

  function selectMenuCategory(mcid) {
    global.selected_menu_category = mcid;
    navigation.push('VenueMenuItems');
  }

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Text style={{fontSize: 24, marginTop: 50, marginLeft: 20}}>
        Venue Menu
      </Text>
      <Button
        onPress={(e) => navigation.push('VenueAbout')}
        title="About Venue"></Button>
      <Button
        onPress={(e) => navigation.push('VenueMenuCategory')}
        title="Category 1"></Button>

      <FlatList
        data={MenuCategoryArray}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={(e) => selectMenuCategory(item.id)}
            style={{
              width: '100%',
              height: 55,
              backgroundColor: '#F9F9F9',
              borderTopColor: '#F0F0F0',
              borderTopWidth: 1,
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: 19,
                  marginTop: 14,
                  marginLeft: 15,
                  color: '#222222',
                }}>
                {item.name}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
