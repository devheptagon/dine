import React, { useState, useEffect, useRef } from 'react';
import { Alert, Button, SafeAreaView, Platform, TextInput, View, Text, Image, ScrollView, TouchableOpacity, FlatList, StatusBar } from 'react-native';

export const VenueMenuItems = ({ navigation }) => {
    const [MenuItemsArray, setMenuItemsArray] = useState();

    useEffect(() => {
        getMenuItems();
    }, [])

    async function getMenuItems(){
        var data = new FormData()
        data.append("venue_id", global.selected_venue_id)
        data.append("category_id", global.selected_menu_category)

        let response = await fetch('https://cacloud.co.uk/api/dinelocal/menu/items', { method: 'POST', headers: global.apiheader, body: data });
        if (response.status !== 200) { alert(await response.json())} else {
            let responseJson = await response.json();
            console.log(responseJson);
            if(responseJson["return"] === true){
                setMenuItemsArray(responseJson["menu_items"]);
            }else{
                alert("Error fetching data");
            }
        }
    }

    function selectItem(iid, iname, iprice, ivar){
        global.selected_item_id = iid;
        navigation.push("VenueMenuSelectedItem");
    }

    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <Text style={{fontSize: 24, marginTop: 50, marginLeft: 20}}>Venue Menu Items</Text>

            <FlatList
            data={MenuItemsArray}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item})=>(
            <TouchableOpacity
            onPress={(e) => selectItem(item.id, item.name, item.price, item.variations)}
            style={{width: '100%', height: 55, backgroundColor: '#F9F9F9', borderTopColor: '#F0F0F0', borderTopWidth: 1}}>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{fontSize: 19, marginTop: 14, marginLeft: 15, color: '#222222'}}>{item.name}</Text>
                </View>
            </TouchableOpacity>
            )}
            />
        </View>
    );
}