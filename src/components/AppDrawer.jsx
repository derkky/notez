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
      <DrawerItemList {...props} />
      <DrawerItem
        label="Help"
        onPress={() => {}}
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