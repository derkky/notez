import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';

import {Searchbar} from "react-native-paper"

import {View, StyleSheet} from "react-native"

import {useSelector} from "react-redux"

// todo get categories here

const AppDrawer = (props) => {

  const categories = useSelector(state => state.categories.value)

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
      {categories.map(cat => (
          <DrawerItem
            label={cat.category}
            onPress={() => {props.navigation.navigate("Home", {category: cat.category})}}
            key={cat.category}
          />
      ))}

    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
    searchbarContainer: {
        margin: 20
    }
})

export default AppDrawer