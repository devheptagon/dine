import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {View, Text} from 'react-native';
import {getItem} from '../integration/api';
import Colors from '../utils/colors';

export const VenueMenuSelectedItem = ({navigation}) => {
  const selectedVenueId = useSelector(
    (state) => state.appReducer.selectedVenueId,
  );
  const selectedItemId = useSelector(
    (state) => state.appReducer.selectedItemId,
  );

  const [itemArray, setItemArray] = useState({
    item_id: 0,
    item_name: '',
  });

  useEffect(() => {
    getItem(selectedVenueId, selectedItemId, setItemArray);
  }, [selectedVenueId, selectedItemId]);

  return (
    <View style={{flex: 1, backgroundColor: Colors.white1}}>
      <Text style={{fontSize: 24, marginTop: 50, marginLeft: 20}}>
        Item ID: {itemArray.item_id}
      </Text>
      <Text style={{fontSize: 24, marginTop: 50, marginLeft: 20}}>
        Item Name: {itemArray.item_name}
      </Text>
    </View>
  );
};
