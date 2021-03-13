import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, Text} from 'react-native';
import {getMenuItems} from '../integration/api';
import Pages from '../utils/pages';
import MenuItemList from './sub/menuItemList.js';
import {setSelectedItemIdAction} from '../redux/app/appActions';
import Colors from '../utils/colors';

export const VenueMenuItems = ({navigation}) => {
  const dispatch = useDispatch();
  const selectedVenueId = useSelector(
    (state) => state.appReducer.selectedVenueId,
  );
  const selectedMenuCategoryId = useSelector(
    (state) => state.appReducer.selectedMenuCategoryId,
  );

  const [MenuItemsArray, setMenuItemsArray] = useState();

  useEffect(() => {
    getMenuItems(selectedVenueId, selectedMenuCategoryId, setMenuItemsArray);
  }, [selectedVenueId, selectedMenuCategoryId]);

  function selectItem(itemId, iname, iprice, ivar) {
    dispatch(setSelectedItemIdAction(itemId));
    navigation.push(Pages.VenueMenuSelectedItem);
  }

  return (
    <View style={{flex: 1, backgroundColor: Colors.white1}}>
      <Text style={{fontSize: 24, marginTop: 50, marginLeft: 20}}>
        Venue Menu Items
      </Text>
      <MenuItemList
        data={MenuItemsArray}
        selectHandler={(item) =>
          selectItem(item.id, item.name, item.price, item.variations)
        }
      />
    </View>
  );
};
