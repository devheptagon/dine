import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import List from '../../components/list';
import Colors from '../../utils/colors';

const MenuList = (props) => (
  <List
    data={props.data}
    renderItem={({item}) => (
      <ListItem item={item} selectHandler={props.selectHandler} />
    )}
  />
);

const ListItem = ({item, selectHandler}) => (
  <TouchableOpacity
    onPress={(e) => selectHandler(item.id)}
    style={{
      width: '100%',
      height: 55,
      backgroundColor: Colors.white4,
      borderTopColor: Colors.white2,
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
          color: Colors.gray2,
        }}>
        {item.name}
      </Text>
    </View>
  </TouchableOpacity>
);

export default MenuList;
