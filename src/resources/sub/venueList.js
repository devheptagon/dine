import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import List from '../../components/list';
import Stars from '../../components/stars';
import Colors from '../../utils/colors';

const VenueList = (props) => (
  <List
    data={props.data}
    renderItem={({item}) => (
      <ListItem item={item} selectHandler={props.selectHandler} />
    )}
  />
);

const ListItem = ({item, selectHandler}) => (
  <TouchableWithoutFeedback onPress={() => selectHandler(item.id)}>
    <View
      style={{
        flexDirection: 'row',
        width: '90%',
        height: 91,
        backgroundColor: Colors.white1,
        marginTop: 12,
        marginLeft: '5%',
        borderRadius: 16,
        shadowColor: Colors.black6,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 3.65,
        elevation: 1,
      }}>
      <View
        style={{
          width: 65,
          height: 65,
          backgroundColor: Colors.white5,
          marginTop: 13,
          marginLeft: 13,
          borderRadius: 12,
        }}>
        {/* Image Here */}
      </View>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <Text style={{fontSize: 16, marginTop: 14, marginLeft: 16}}>
          {item.name}
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: Colors.black4,
            marginTop: 4,
            marginLeft: 16,
          }}>
          {item.address}
        </Text>

        <View style={{flexDirection: 'row', marginTop: 4}}>
          <View style={{flex: 1, flexDirection: 'row', marginLeft: 16}}>
            <Stars count={4} />
          </View>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <Text
              style={{
                fontSize: 12,
                color: Colors.black4,
                marginRight: 16,
              }}>
              {item.distance}
            </Text>
          </View>
        </View>
      </View>
    </View>
  </TouchableWithoutFeedback>
);

export default VenueList;
