import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { FAB } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


const AddNoteButton = (props) => {

    const navigation = useNavigation()

    return(
      <FAB
        style={styles.fab}
        onPress={() => navigation.navigate("Input")}
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