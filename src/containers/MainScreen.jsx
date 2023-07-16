import {View, FlatList, StyleSheet, Dimensions, SafeAreaView} from "react-native"
import {useSelector} from "react-redux"

import Note from "../components/Note"

const windowHeight = Dimensions.get("window").height

const MainScreen = (props) => {

    const NOTES = useSelector(state => state.notes.value)

    return (
        <SafeAreaView style={styles.mainContainer}>
            <FlatList
                data={NOTES}
                renderItem={({item}) => <Note title={item.title} content={item.content} id={item.id} key={item.id}/>}
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