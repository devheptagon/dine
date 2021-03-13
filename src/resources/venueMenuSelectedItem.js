import React, {useState, useEffect, useRef} from 'react';
import {
  Alert,
  Button,
  SafeAreaView,
  Platform,
  TextInput,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  StatusBar,
} from 'react-native';

export const VenueMenuSelectedItem = ({navigation}) => {
  const [itemArray, setItemArray] = useState({
    item_id: 0,
    item_name: '',
  });

  useEffect(() => {
    getItem();
  }, []);

  async function getItem() {
    var data = new FormData();
    data.append('venue_id', global.selected_venue_id);

    let response = await fetch(
      'https://cacloud.co.uk/api/dinelocal/menu/item/' +
        global.selected_item_id,
      {method: 'POST', headers: global.apiheader, body: data},
    );
    if (response.status !== 200) {
      alert(await response.json());
    } else {
      let responseJson = await response.json();
      console.log(responseJson);
      if (responseJson['return'] === true) {
        setItemArray({
          item_id: responseJson['item_array']['id'],
          item_name: responseJson['item_array']['name'],
        });
      } else {
        alert('Error fetching data');
      }
    }
  }

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Text style={{fontSize: 24, marginTop: 50, marginLeft: 20}}>
        Item ID: {itemArray.item_id}
      </Text>
      <Text style={{fontSize: 24, marginTop: 50, marginLeft: 20}}>
        Item Name: {itemArray.item_name}
      </Text>
    </View>
  );
};
