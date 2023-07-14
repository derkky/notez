import { Appbar } from "react-native-paper"


const AppTitleBar = (props) => {

    return (
      <Appbar.Header>
        <Appbar.Action icon="menu" onPress={() => props.navigation.openDrawer()} />
        <Appbar.Content title="NOTEZ" />
        <Appbar.Action icon="sort" onPress={() => {}} />
      </Appbar.Header>
    )
}

export default AppTitleBar