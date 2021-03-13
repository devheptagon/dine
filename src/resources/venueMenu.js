import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Button, View, Text} from 'react-native';
import {getMenuCategories} from '../integration/api';
import MenuList from './sub/menuList';
import Pages from '../utils/pages';

export const VenueMenu = ({navigation}) => {
  const dispatch = useDispatch();
  const [MenuCategoryArray, setMenuCategoryArray] = useState();
  const selectedVenueId = useSelector(
    (state) => state.appReducer.selectedVenueId,
  );
  useEffect(() => {
    const successCallback = (categories) => setMenuCategoryArray(categories);
    getMenuCategories(selectedVenueId, successCallback);
  }, [selectedVenueId]);

  const selectMenuCategory = (menuCategoryId) => {
    dispatch(setMenuCategoryArray(menuCategoryId));
    navigation.push(Pages.VenueMenuItems);
  };

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

      <MenuList
        data={MenuCategoryArray}
        selectHandler={(itemId) => selectMenuCategory(itemId)}
      />
    </View>
  );
};
