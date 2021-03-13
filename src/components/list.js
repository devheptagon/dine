import React from 'react';
import {FlatList} from 'react-native';

const List = (props) => (
  <FlatList
    data={props.data}
    keyExtractor={(item) => item.id.toString()}
    renderItem={props.renderItem}
  />
);

export default List;
