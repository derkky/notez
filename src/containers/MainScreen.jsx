import {View, FlatList, StyleSheet, Dimensions, SafeAreaView} from "react-native"
import {useSelector} from "react-redux"
import {useEffect, useState} from "react"

import Note from "../components/Note"

const windowHeight = Dimensions.get("window").height

const MainScreen = (props) => {

    let NOTES = useSelector(state => state.notes.value)

    const [displayedNotes, setDisplayedNotes] = useState(NOTES)

    useEffect(() => {
        if (props.route.params){
            setDisplayedNotes(NOTES.filter(note => note.category == props.route.params.category))
        } else {
            setDisplayedNotes(NOTES)
        }
    }, [props.route.params, NOTES])

    return (
        <SafeAreaView style={styles.mainContainer}>
            <FlatList
                data={displayedNotes}
                renderItem={({item}) => <Note title={item.title} content={item.content} id={item.id} date={item.date} category={item.category} key={item.id}/>}
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