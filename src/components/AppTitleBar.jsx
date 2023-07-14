import { Appbar, Menu } from "react-native-paper"
import {useState, useEffect} from "react"

const AppTitleBar = (props) => {

    const [menuOpen, setMenuOpen] = useState(false)

    return (
      <>
      <Appbar.Header>
        <Appbar.Action icon="menu" onPress={() => props.navigation.openDrawer()} />
        <Appbar.Content title="NOTEZ" />
        <Menu
          visible={menuOpen}
          anchor={<Appbar.Action icon="sort" onPress={() => {setMenuOpen(true)}}/>}
          onDismiss={() => setMenuOpen(false)}
         >
          <Menu.Item onPress={() => {}} title="Newest First" />
          <Menu.Item onPress={() => {}} title="Oldest First" />
        </Menu>
      </Appbar.Header>
      </>
    )
}

export default AppTitleBar