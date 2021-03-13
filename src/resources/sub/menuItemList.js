import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import List from '../../components/list';

const MenuItemList = (props) => (
  <List
    data={props.data}
    renderItem={({item}) => (
      <ListItem item={item} selectHandler={props.selectHandler} />
    )}
  />
);

const ListItem = ({item, selectHandler}) => (
  <TouchableOpacity
    onPress={(e) => selectHandler(item)}
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
);

export default MenuItemList;
