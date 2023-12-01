import { StyleSheet, Button, View } from 'react-native'
import React from 'react'

import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";


export default function CustomAppNavigatorContent(props) {
    const { navigation } = props;

    const handleLogoutPress = () => {
      navigation.navigate('Welcome');
    };
  
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <View style={{ padding: 20 }}>
          <Button title="Logout" onPress={handleLogoutPress} />
        </View>
      </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({})