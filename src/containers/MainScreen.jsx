import {View, FlatList, StyleSheet, Dimensions, SafeAreaView} from "react-native"

import Note from "../components/Note"

const NOTES = [0, 1, 2, 1,1,1,1,1] // TODO: Link to redux state

const windowHeight = Dimensions.get("window").height

const MainScreen = (props) => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <FlatList
                data={NOTES}
                renderItem={() => <Note/>}
                contentContainerStyle={{ paddingBottom: 200 }}
            />
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    mainContainer: {
        minHeight: windowHeight
    }
});

export default MainScreen