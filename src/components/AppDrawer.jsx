import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';

import {Searchbar} from "react-native-paper"

import {View, StyleSheet} from "react-native"

const AppDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={styles.searchbarContainer}
      >
        <Searchbar
          placeholder="Search"
          onChangeText={() => {}}
          value={"test"}
        />
      </View>

      <DrawerItem
        label="Home"
        onPress={() => {props.navigation.navigate("Home")}}
      />

    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
    searchbarContainer: {
        margin: 20
    }
})

export default AppDrawer