import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { FAB } from 'react-native-paper';
import {useEffect } from "react"


const AddNoteButton = (props) => {

    useEffect(() => {
        console.log("mounted")
    }, [])

    return(
      <FAB
        style={styles.fab}
        onPress={() => console.log('Pressed')}
        icon="plus"
      />
    )
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
})

export default AddNoteButton